import { createTheme } from "@mui/material";

export const temaGeneral = createTheme({
  palette: {
    primary: {
      main: "#f19601",
      secondary: "#d55c4a",
    },
    secondary: {
      main: "#c55d4a",
    },
  },
});

export const customThemeXCards = createTheme({
  typography: {
    h2: {
      fontSize: 25,
      fontWeight: "bolder",
    },
    h3: {
      fontSize: 22,
      color: "brown",
      fontWeight: "bolder",
    },

    h4: {
      fontSize: 20,
    },
    h5: {
      fontSize: 18,
      color: "green",
    },
  },
});
