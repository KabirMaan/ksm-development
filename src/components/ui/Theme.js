import { createMuiTheme } from "@material-ui/core/styles";

const ksmBlue = "#0B72B9";
const ksmOrange = "#FFBA60";

const theme = createMuiTheme({
  palette: {
    common: {
      blue: `${ksmBlue}`,
      orange: `${ksmOrange}`
    },
    primary: {
      main: `${ksmBlue}`
    },
    secondary: {
      main: `${ksmOrange}`
    }
  },
  status: {
    danger: "orange"
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem"
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white"
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: `${ksmBlue}`,
      lineHeight: 1.5
    }
  }
});

export default theme;
