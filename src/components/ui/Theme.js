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
    }
  }
});

export default theme;
