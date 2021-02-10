import { createMuiTheme } from "@material-ui/core/styles";
import { grey, purple, deepPurple } from "@material-ui/core/colors";
declare module "@material-ui/core/styles/createMuiTheme" {
  interface Theme {}
  interface ThemeOptions {}
}

const theme = createMuiTheme({
  palette: {
    primary: {
      main: deepPurple[300],
      contrastText: "#fff",
      dark: "#68518f",
      light: "#aa90d7",
    },
    secondary: {
      main: "#ADCD75",
      contrastText: "#fff",
      dark: "#798f51",
      light: "#bdd790",
    },
    text: {
      primary: "#546e7a",
    },
  },

  overrides: {
    MuiPaper: {
      elevation1: {
        boxShadow: "0px 10px 20px #0000002b",
      },
    },
  },
});

export default theme;
