import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import Fade from "react-reveal/Fade";
import Zoom from "react-reveal/Zoom";
import Avatar from "@material-ui/core/Avatar";
import pic from "../Assets/KristinB.png";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(35),
    height: theme.spacing(35),
    margin: theme.spacing(2),
  },
  title: {
    color: "#A0522D",
  },
  subtitle: {
    color: "#A0522D",
    marginBottom: "2rem",
  },
  text: {
    color: "#A0522D",
    marginTop: 0,
    maxWidth: "80%",
    margin: "auto",
    marginBottom: "2rem",
  },
  typedContainer: {
    background: "rgba(255, 250, 240, 0.7)",
    borderRadius: 5,
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    width: "90%",
    textAlign: "center",
    zIndex: 1,
  },
}));

function About() {
  const classes = useStyles();
  return (
    <Box className={classes.typedContainer}>
      <Grid container justify="center">
        <Zoom duration={3000} delay={5000}>
          <Avatar className={classes.avatar} src={pic} alt="avatar picture" />
        </Zoom>
      </Grid>
      <Fade bottom duration={2000}>
        <Typography className={classes.title} variant="h3">
          Hi my name is Kristin Brumfield
        </Typography>
      </Fade>
      <br />
      <Fade bottom duration={3000} delay={1000}>
        <Typography className={classes.subtitle} variant="h4">
          I am a Full Stack Web Developer
        </Typography>
      </Fade>
      <Zoom duration={3000} delay={3000}>
        <Typography className={classes.text} variant="h5">
          When it comes to web design, I am always eager to tackle a new
          challenge. If I don't know the answer right off the bat, I don't
          hesitate to ask for help or search for the solution. I work great with
          a team and thrive in a fast pace environment. I am reliable and
          resilient. I work best with people who can tell a better Dad joke than
          myself.
          <br />
          Please check out my Projects, GitHub, and LinkedIn.
        </Typography>
      </Zoom>
    </Box>
  );
}

export default About;
