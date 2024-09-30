import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const theme = extendTheme(
  {
    fonts: {
      heading: `'Poppins', sans-serif`,
      body: `'Poppins', sans-serif`,
      arabic: "IBM Plex Sans Arabic",
    },
    breakpoints: {
      xs: "1rem",
    },
    colors: {
      primary: {
        "50": "#EDEEF7",
        "100": "#CDCFEA",
        "200": "#ADB0DC",
        "300": "#8D92CE",
        "400": "#6D73C0",
        "500": "#4D54B3",
        "600": "#3D438F",
        "700": "#2E336B",
        "800": "#1F2247",
        "900": "#0F1124",
      },
      secondary: {
        "50": "#FCEEE8",
        "100": "#F7D1BF",
        "200": "#F2B396",
        "300": "#ED956E",
        "400": "#E87745",
        "500": "#E3591C",
        "600": "#B64816",
        "700": "#883611",
        "800": "#5B240B",
        "900": "#2D1206",
      },
      custom: {
        "50": "#87AAD4",
      },
      border: {
        primary: "#BCBCBC",
      },
    },
    components: {
      Button: {
        baseStyle: {
          borderRadius: "20px",
        },
      },
      Input: {
        defaultProps: {
          focusBorderColor: "primary.500",
        },
      },
      Textarea: {
        defaultProps: {
          focusBorderColor: "primary.500",
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "primary" })
);

export default theme;
