import React from "react";
import Lottie from "react-lottie";
import { makeStyles, useTheme } from "@material-ui/styles";
import { Grid, Button, Typography, useMediaQuery } from "@material-ui/core";

import animationData from "../animations/landinganimation/data";
import customSoftwareIcon from "../assets/Custom Software Icon.svg";
import mobileAppsIcon from "../assets/mobileIcon.svg";

const useStyles = makeStyles((theme) => ({
  animation: {
    maxWidth: "50em",
    minWidth: "21em",
    marginTop: "2em",
    marginLeft: "10%",
    [theme.breakpoints.down("sm")]: {
      maxWidth: "30em",
    },
  },
  estimateButton: {
    ...theme.typography.estimate,
    backgroundColor: theme.palette.common.orange,
    borderRadius: 50,
    height: 45,
    width: 145,
    marginRight: 40,
    "&:hover": {
      backgroundColor: theme.palette.secondary.light,
    },
  },
  buttonContainer: {
    marginTop: "1em",
  },
  learnButtonHero: {
    ...theme.typography.learnButton,
    fontSize: ".9rem",
    height: 45,
    width: 145,
  },
  learnButton: {
    ...theme.typography.learnButton,
    fontSize: ".7rem",
    height: 35,
    padding: 5,
    [theme.breakpoints.down("sm")]: {
      marginTop: "1em",
      marginBottom: "2em",
    },
  },
  mainContainer: {
    marginTop: "5em",
    [theme.breakpoints.down("md")]: {
      marginTop: "3em",
    },
    [theme.breakpoints.down("xs")]: {
      marginTop: "2em",
    },
  },
  heroTextContainer: {
    minWidth: "21.5em",
    marginLeft: "1em",
    [theme.breakpoints.down("md")]: {
      marginLeft: "0em",
    },
  },
  specialText: {
    fontFamily: "Pacifico",
    color: theme.palette.common.orange,
  },
  subTitle: {
    marginBottom: "1em",
  },
  icon: {
    marginLeft: "2em",
    [theme.breakpoints.down("xs")]: {
      marginLeft: "0em",
    },
  },

  servicesContainer: {
    marginTop: "12em",
    [theme.breakpoints.down("sm")]: {
      padding: 25,
    },
  },
  servicesLeft: {
    marginLeft: "5em",
    [theme.breakpoints.down("sm")]: {
      marginLeft: "0em",
      textAlign: "center",
    },
  },
  servicesRight: {
    [theme.breakpoints.down("sm")]: {
      textAlign: "center",
    },
  },
  mobileImage: {
    marginRight: "5em",
    [theme.breakpoints.down("sm")]: {
      marginRight: "0em",
      textAlign: "center",
    },
  },
}));

const LandingPage = () => {
  const classes = useStyles();
  const theme = useTheme();
  const matchesSM = useMediaQuery(theme.breakpoints.down("sm"));
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Grid container direction="column" className={classes.mainContainer}>
      {/*-----Hero Block-----*/}
      <Grid item>
        <Grid container justify="flex-end" alignItems="center" direction="row">
          <Grid item sm className={classes.heroTextContainer}>
            <Typography align="center" variant="h2">
              Expert Software Development
            </Typography>
            <Grid
              container
              justify="center"
              // alignItems="center"
              className={classes.buttonContainer}
            >
              <Grid item>
                <Button variant="contained" className={classes.estimateButton}>
                  Free Estimate
                </Button>
              </Grid>
              <Grid item>
                <Button variant="outlined" className={classes.learnButtonHero}>
                  Learn More
                </Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid className={classes.animation} item sm>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        {/*-----Custom Software Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : undefined}
        >
          <Grid item style={{}} className={classes.servicesLeft}>
            <Typography variant="h4">Custom Software Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Save Energy. Save Time. Save Money.
            </Typography>
            <Typography variant="subtitle1">
              Complete digital solutions, from investigation to{" "}
              <span className={classes.specialText}>celebration.</span>
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span>Learn More</span>
            </Button>
          </Grid>
          <Grid item>
            <img
              alt="custom software icon"
              src={customSoftwareIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>

      <Grid item>
        {/*-----iOS/Android Block------*/}
        <Grid
          container
          direction="row"
          className={classes.servicesContainer}
          justify={matchesSM ? "center" : "flex-end"}
        >
          <Grid item style={{}} className={classes.servicesRight}>
            <Typography variant="h4">iOS/Android App Development</Typography>
            <Typography variant="subtitle1" className={classes.subTitle}>
              Extend Functionality. Extend Access. Increase Engagement.
            </Typography>
            <Typography variant="subtitle1">
              Integrate your web experience or create a standalone app{" "}
              {matchesSM ? null : <br />} with either mobile platform.
            </Typography>
            <Button variant="outlined" className={classes.learnButton}>
              <span>Learn More</span>
            </Button>
          </Grid>
          <Grid item className={classes.mobileImage}>
            <img
              alt="mobile phone icon"
              src={mobileAppsIcon}
              className={classes.icon}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
