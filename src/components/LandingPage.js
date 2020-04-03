import React from "react";
import Lottie from "react-lottie";
import animationData from "../animations/landinganimation/data";
import { makeStyles } from "@material-ui/styles";
import { Grid, Button } from "@material-ui/core";

const useStyles = makeStyles(theme => ({}));

const LandingPage = () => {
  const classes = useStyles();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <Grid container direction="column">
      <Grid item>
        <Grid container direction="row">
          <Grid item>
            <div>Expert Software Development</div>
            <Grid container>
              <Grid item>
                <Button variant="contained">Free Estimate</Button>
              </Grid>
              <Grid item>
                <Button variant="outlined">Learn More</Button>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Lottie options={defaultOptions} height={"100%"} width={"100%"} />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LandingPage;
