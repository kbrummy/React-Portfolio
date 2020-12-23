import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Typography, Grid } from "@material-ui/core";
import Avatar from "@material-ui/core/Avatar";
import pic from "../Assets/KristinB.png";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  avatar: {
    width: theme.spacing(25),
    height: theme.spacing(25),
    margin: theme.spacing(2),
  },
  subtitle: {
    color: "#A0522D",
    margin: "2rem",
  },
  typedContainer: {
    background: "rgba(255, 250, 240, 0.7)",
    borderRadius: 5,
    position: "absolute",
    top: "55%",
    left: "50%",
    transform: "translate( -50%, -50%)",
    width: "60%",
    height: "70%",
    textAlign: "center",
    zIndex: 1,
  },
}));

function Contact() {
  const classes = useStyles();
  return (
    <div>
      <Header />

      <Box className={classes.typedContainer}>
        <Grid container justify="center">
          <Avatar className={classes.avatar} src={pic} alt="avatar picture" />
        </Grid>
        <Typography className={classes.subtitle} variant="h5">
          Located in Sacramento, Ca
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          brummy.k@gmail.com
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Link href="https://github.com/kbrummy" target="_blank">
            GitHub Profile
          </Link>
        </Typography>
        <Typography className={classes.subtitle} variant="h5">
          <Link
            href="https://www.linkedin.com/in/kristinbrumfield/"
            target="_blank"
          >
            LinkedIn Profile
          </Link>
        </Typography>
      </Box>
      <Footer />
    </div>
  );
}

export default Contact;
