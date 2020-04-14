import { createMuiTheme } from "@material-ui/core/styles";

const ksmBlue = "#0B72B9";
const ksmOrange = "#FFBA60";
const ksmGrey = "#868686";
const theme = createMuiTheme({
  palette: {
    common: {
      blue: ksmBlue,
      orange: ksmOrange,
    },
    primary: {
      main: ksmBlue,
    },
    secondary: {
      main: ksmOrange,
    },
  },
  status: {
    danger: "orange",
  },
  typography: {
    tab: {
      fontFamily: "Raleway",
      textTransform: "none",
      fontWeight: 700,
      fontSize: "1rem",
    },
    estimate: {
      fontFamily: "Pacifico",
      fontSize: "1rem",
      textTransform: "none",
      color: "white",
    },
    h2: {
      fontFamily: "Raleway",
      fontWeight: 700,
      fontSize: "2.5rem",
      color: ksmBlue,
      lineHeight: 1.5,
    },
    h3: {
      fontFamily: "Pacifico",
      fontSize: "2.5rem",
      color: ksmBlue,
    },
    h4: {
      fontFamily: "Raleway",
      fontSize: "1.75rem",
      color: ksmBlue,
      fontWeight: 700,
    },
    subtitle1: {
      fontSize: "1.25rem",
      fontWeight: 300,
      color: `${ksmGrey}`,
    },
    subtitle2: {
      color: "white",
      fontSize: "1.25rem",
      fontWeight: 300,
    },
    learnButton: {
      borderColor: ksmBlue,
      color: ksmBlue,
      borderWidth: 2,
      textTransform: "none",
      borderRadius: 50,
      fontFamily: "Roboto",
      fontWeight: "bold",
    },
  },
});

export default theme;
