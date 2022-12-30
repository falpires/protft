import { colors } from "../../design/colors";
import { useExternalNavigation } from "../../hooks/useNavigation";

export const TwitterLogo = () => {
  const goTo = useExternalNavigation("https://twitter.com/protft", "_blank");

  return (
    <svg
      onClick={goTo}
      width="31"
      height="25"
      viewBox="0 0 31 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{ cursor: "pointer" }}
    >
      <path
        d="M9.74149 24.7729C20.9621 24.7729 27.0983 15.4768 27.0983 7.41604C27.0983 7.15193 27.0929 6.88917 27.0807 6.62742C28.2718 5.76643 29.3073 4.69171 30.124 3.46887C29.031 3.95449 27.8548 4.2815 26.6208 4.42895C27.8802 3.6738 28.8473 2.47869 29.3035 1.0543C28.1247 1.75331 26.8193 2.26125 25.4301 2.53517C24.3165 1.34953 22.7311 0.60791 20.977 0.60791C17.6078 0.60791 14.8757 3.34002 14.8757 6.70757C14.8757 7.18642 14.9294 7.65175 15.0336 8.09848C9.96401 7.84383 5.46832 5.41608 2.45992 1.72524C1.93541 2.62647 1.63342 3.67414 1.63342 4.79113C1.63342 6.90743 2.7105 8.77584 4.34828 9.86916C3.34762 9.83839 2.4075 9.56311 1.5854 9.1059C1.58404 9.13127 1.58404 9.15697 1.58404 9.18368C1.58404 12.1383 3.68715 14.605 6.47811 15.164C5.96577 15.3036 5.42672 15.3787 4.87009 15.3787C4.47713 15.3787 4.09499 15.3395 3.72334 15.2688C4.49978 17.6922 6.75203 19.4561 9.42226 19.5058C7.33403 21.1422 4.7037 22.1172 1.84579 22.1172C1.35375 22.1172 0.868128 22.0891 0.390625 22.0326C3.09027 23.7627 6.29583 24.7729 9.74149 24.7729Z"
        fill="#FAAC01"
      />
    </svg>
  );
};

export const KofiLogo = () => {
  const goTo = useExternalNavigation("https://ko-fi.com/protft", "_blank");
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="31"
      height="25"
      viewBox="0 0 64 64"
      stroke="none"
      stroke-linecap="round"
      stroke-linejoin="round"
      fill="#fff"
      fill-rule="nonzero"
      onClick={goTo}
      style={{ cursor: "pointer" }}
    >
      <path
        d="M0 32C0 14.272 14.272 0 32 0s32 14.272 32 32-14.272 32-32 32S0 49.728 0 32z"
        fill="#faac01"
      />
      <path
        d="M43.7502 17.2973h3.1599c6.0949 0 11.0358 4.9409 11.0358 11.0358v.6487c0 6.0949-4.9409 11.0357-11.0358 11.0357h-3.1599v3.3215c0 2.813-2.2804 5.0934-5.0934 5.0934H14.6069c-2.813 0-5.0934-2.2804-5.0934-5.0934V19.844c0-1.4065 1.1402-2.5467 2.5467-2.5467zm0 5.8904v10.9394h2.8808c3.0208 0 5.4696-2.4489 5.4696-5.4697s-2.4488-5.4697-5.4696-5.4697z"
        fill="#000"
      />
      <path
        d="M25.946 27.6695c.7868-2.3022 2.6515-3.4533 5.594-3.4533 4.4137 0 6.05 5.4912 3.7364 9.0811-1.5423 2.3932-4.6525 5.4203-9.3304 9.0811-4.6779-3.6608-7.7881-6.6879-9.3305-9.0811-2.3136-3.5899-.6772-9.0811 3.7365-9.0811 2.9425 0 4.8071 1.1511 5.594 3.4533z"
        fill="#faac01"
      />
    </svg>
  );
};

export const DiscordLogo = () => {
  const goTo = useExternalNavigation("https://discord.gg/Ry5Fp54k3q", "_blank");

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 127.14 96.36"
      onClick={goTo}
      width="31"
      height="25"
      style={{ cursor: "pointer" }}
    >
      <g id="图层_2" data-name="图层 2">
        <g id="Discord_Logos" data-name="Discord Logos">
          <g
            id="Discord_Logo_-_Large_-_White"
            data-name="Discord Logo - Large - White"
          >
            <path
              fill={colors.yellow}
              d="M107.7,8.07A105.15,105.15,0,0,0,81.47,0a72.06,72.06,0,0,0-3.36,6.83A97.68,97.68,0,0,0,49,6.83,72.37,72.37,0,0,0,45.64,0,105.89,105.89,0,0,0,19.39,8.09C2.79,32.65-1.71,56.6.54,80.21h0A105.73,105.73,0,0,0,32.71,96.36,77.7,77.7,0,0,0,39.6,85.25a68.42,68.42,0,0,1-10.85-5.18c.91-.66,1.8-1.34,2.66-2a75.57,75.57,0,0,0,64.32,0c.87.71,1.76,1.39,2.66,2a68.68,68.68,0,0,1-10.87,5.19,77,77,0,0,0,6.89,11.1A105.25,105.25,0,0,0,126.6,80.22h0C129.24,52.84,122.09,29.11,107.7,8.07ZM42.45,65.69C36.18,65.69,31,60,31,53s5-12.74,11.43-12.74S54,46,53.89,53,48.84,65.69,42.45,65.69Zm42.24,0C78.41,65.69,73.25,60,73.25,53s5-12.74,11.44-12.74S96.23,46,96.12,53,91.08,65.69,84.69,65.69Z"
            />
          </g>
        </g>
      </g>
    </svg>
    // <svg
    //   onClick={goTo}
    //   width="31"
    //   height="25"
    //   viewBox="0 0 31 25"
    //   fill="none"
    //   xmlns="http://www.w3.org/2000/svg"
    // >
    //   <path
    //     d="M9.74149 24.7729C20.9621 24.7729 27.0983 15.4768 27.0983 7.41604C27.0983 7.15193 27.0929 6.88917 27.0807 6.62742C28.2718 5.76643 29.3073 4.69171 30.124 3.46887C29.031 3.95449 27.8548 4.2815 26.6208 4.42895C27.8802 3.6738 28.8473 2.47869 29.3035 1.0543C28.1247 1.75331 26.8193 2.26125 25.4301 2.53517C24.3165 1.34953 22.7311 0.60791 20.977 0.60791C17.6078 0.60791 14.8757 3.34002 14.8757 6.70757C14.8757 7.18642 14.9294 7.65175 15.0336 8.09848C9.96401 7.84383 5.46832 5.41608 2.45992 1.72524C1.93541 2.62647 1.63342 3.67414 1.63342 4.79113C1.63342 6.90743 2.7105 8.77584 4.34828 9.86916C3.34762 9.83839 2.4075 9.56311 1.5854 9.1059C1.58404 9.13127 1.58404 9.15697 1.58404 9.18368C1.58404 12.1383 3.68715 14.605 6.47811 15.164C5.96577 15.3036 5.42672 15.3787 4.87009 15.3787C4.47713 15.3787 4.09499 15.3395 3.72334 15.2688C4.49978 17.6922 6.75203 19.4561 9.42226 19.5058C7.33403 21.1422 4.7037 22.1172 1.84579 22.1172C1.35375 22.1172 0.868128 22.0891 0.390625 22.0326C3.09027 23.7627 6.29583 24.7729 9.74149 24.7729Z"
    //     fill="#FAAC01"
    //   />
    // </svg>
  );
};
