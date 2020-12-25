import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import Fade from "@material-ui/core/Fade";
import Link from "@material-ui/core/Link";

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: "rgb(95, 158, 160, 0.75)",
  },
  toolbar: {
    minHeight: 128,
    maxWidth: "100%",
    alignItems: "flex-start",
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(2),
  },
  title: {
    alignSelf: "center",
  },
  link: {
    color: "#000",
    fontSize: "large",
  },
}));

const Header = () => {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar className={classes.root} position="static">
      <Toolbar className={classes.toolbar}>
        <Typography className={classes.title} variant="h3" noWrap>
          Kbrummy
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.link}
          >
            Menu
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/" className={classes.link}>
                Home
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="React-Portfolio/projects" className={classes.link}>
                Projects
              </Link>
            </MenuItem>
            <MenuItem onClick={handleClose}>
              <Link href="React-Portfolio/contact" className={classes.link}>
                Contact
              </Link>
            </MenuItem>
          </Menu>
        </Typography>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
