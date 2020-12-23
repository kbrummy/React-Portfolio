import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BottomNavigation from "@material-ui/core/BottomNavigation";
import BottomNavigationAction from "@material-ui/core/BottomNavigationAction";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";
import resume from "../Assets/Brumfield,K.Resume.pdf";

const useStyles = makeStyles({
  root: {
    backgroundColor: "rgb(95, 158, 160, 0.75)",
    textAlign: "center",
    position: "fixed",
    bottom: "0",
    height: "60px",
    width: "100%",
  },
});

function Footer() {
  const classes = useStyles();
  const [value] = React.useState("recents");

  return (
    <BottomNavigation value={value} className={classes.root}>
      <BottomNavigationAction
        label="GitHub"
        value="github"
        icon={<GitHubIcon />}
        href="https://github.com/kbrummy"
        target="_blank"
      />
      <BottomNavigationAction
        label="LinkedIn"
        value="linkedin"
        icon={<LinkedInIcon />}
        href="https://www.linkedin.com/in/kristinbrumfield/"
        target="_blank"
      />
      <BottomNavigationAction
        label="Resume"
        value="resume"
        icon={<AccountBoxIcon />}
        href={resume}
        target="_blank"
      />
    </BottomNavigation>
  );
}

export default Footer;
