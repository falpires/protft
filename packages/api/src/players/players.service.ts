import { BadRequestException, Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import slugify from "slugify";
import { Repository, UpdateResult } from "typeorm";
import { PaginationArgs } from "../lib/dto/pagination.args";
import { SearchQuery } from "../lib/SearchQuery";
import { Tournament } from "../tournaments/tournament.entity";
import { CreatePlayerArgs } from "./dto/create-player.args";
import { BaseGetPlayerArgs } from "./dto/get-players.args";
import { Player } from "./player.entity";

interface PlayerCountry {
  country: string;
}

interface PlayerRegion {
  region: string;
}

@Injectable()
export class PlayersService {
  constructor(
    @InjectRepository(Player)
    private playerRepository: Repository<Player>,
    private searchQueryProvider: SearchQuery,
  ) {}

  async findOne(id: number) {
    return this.playerRepository.findOne(id);
  }

  async findOneBySlug(slug: string) {
    return this.playerRepository.findOne({ slug });
  }

  async findAll(
    { searchQuery, ...filters }: BaseGetPlayerArgs,
    { take = 10, skip = 0 }: PaginationArgs,
  ): Promise<Player[]> {
    const searchQueryFilter =
      this.searchQueryProvider.getSearchQueryFilter(searchQuery);
    return this.playerRepository.find({
      where: {
        ...searchQueryFilter,
        ...filters,
      },
      take,
      skip,
    });
  }

  async createOne({
    name,
    country,
    region,
  }: CreatePlayerArgs): Promise<Player> {
    if (!name || !region) {
      throw new BadRequestException("Name and Region are mandatory");
    }
    const savedPlayer = await this.playerRepository.save({
      name,
      country,
      region,
    });
    await this.playerRepository.update(
      { id: savedPlayer.id },
      { slug: this.createSlug(savedPlayer) },
    );
    return savedPlayer;
  }

  async findUniqueCountries(): Promise<string[]> {
    const rawResults = await this.playerRepository
      .createQueryBuilder("player")
      .select("country")
      .distinct(true)
      .orderBy("country")
      .execute();
    return this.unpackBy<PlayerCountry>(rawResults, "country");
  }

  async findUniqueRegions(): Promise<string[]> {
    const rawResults = await this.playerRepository
      .createQueryBuilder("player")
      .select("region")
      .distinct(true)
      .orderBy("region")
      .execute();
    return this.unpackBy<PlayerRegion>(rawResults, "region");
  }

  async findTournamentsPlayed(id: number): Promise<Tournament[]> {
    return this.playerRepository
      .createQueryBuilder()
      .select("t.*")
      .distinct()
      .from("lobby_player_info", "lpi")
      .innerJoin("lobby", "l", "l.id = lpi.lobbyId")
      .innerJoin("stage", "s", "s.id = l.stageId")
      .innerJoin("tournament", "t", "t.id = s.tournamentId")
      .where({ playerId: id })
      .orderBy("t.startDate", "DESC")
      .execute();
  }

  unpackBy<T>(result: T[], property: keyof T) {
    return result.map((entry) => entry[property]);
  }

  async createSlugs(): Promise<UpdateResult[]> {
    const allTournaments = await this.playerRepository.find();
    const payloads = allTournaments.map(async (player) =>
      this.playerRepository.update(
        { id: player.id },
        {
          slug: await this.createSlug(player),
        },
      ),
    );
    return Promise.all(payloads);
  }

  private createSlug(player: Pick<Player, "id" | "name" | "region">): string {
    return slugify(`${player.id}-${player.name}`, {
      lower: true,
      strict: true,
    });
  }
}
