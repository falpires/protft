const countryToFlagEmoji: { [key: string]: string } = {
  USA: "🇺🇸",
  Brazil: "🇧🇷",
  China: "🇨🇳",
  France: "🇫🇷",
  "United Kingdom": "🇬🇧",
  Turkey: "🇹🇷",
  Japan: "🇯🇵",
  "South Korea": "🇰🇷",
  Peru: "🇵🇪",
  "Costa Rica": "🇨🇷",
  Australia: "🇦🇺",
  Argentina: "🇦🇷",
  Belgium: "🇧🇪",
  Canada: "🇨🇦",
  Colombia: "🇨🇴",
  "Czech Republic": "🇨🇿",
  Germany: "🇩🇪",
  Poland: "🇵🇱",
  Denmark: "🇩🇰",
  Spain: "🇪🇸",
  Hungary: "🇭🇺",
  Russia: "🇷🇺",
  "South Africa": "🇿🇦",
  Italy: "🇮🇹",
  Sweden: "🇸🇪",
  Croatia: "🇭🇷",
  Serbia: "🇷🇸",
  Greece: "🇬🇷",
  "": "",
};

export const getFlagEmoji = (country: string): string => {
  return countryToFlagEmoji[country];
};
