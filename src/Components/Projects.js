import React from "react";
import Header from "./Header";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Footer from "./Footer";
import InstaDate from "../Assets/Insta-Date.png";
import Flip from "react-reveal/Flip";
import Grid from "@material-ui/core/Grid";
import Culinate from "../Assets/Culinate.png";
import Code from "../Assets/Code-Quiz.png";
import WorkDay from "../Assets/Work-Day-Scheduler.png";
import EmployeeDirectory from "../Assets/employeeDirectory.png";
import FitnessTracker from "../Assets/fitnessTracker.png";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 150,
  },
  media: {
    height: 275,
  },
});

function Projects() {
  const classes = useStyles();
  return (
    <div>
      <Header />
      <Container>
        <Grid container justify="center">
          <Grid item xs={12} sm={8} md={6}>
            {/* first project */}
            <Flip bottom duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={InstaDate}
                  title="InstaDate"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Insta-Date
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://kbrummy.github.io/Insta-Date/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
          {/* second project */}
          <Grid item xs={12} sm={8} md={6}>
            <Flip top duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={Culinate}
                  title="Culinate"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Culinate
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://culinate.herokuapp.com/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
          {/* third project */}
          <Grid item xs={12} sm={8} md={6}>
            <Flip bottom duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={Code}
                  title="CodeQuiz"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Code Quiz
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://kbrummy.github.io/Code-Quiz/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
          {/* fourth project */}
          <Grid item xs={12} sm={8} md={6}>
            <Flip top duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={WorkDay}
                  title="WorkDay"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Work Day Scheduler
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://kbrummy.github.io/Day-Planner/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
          {/* fifth project */}
          <Grid item xs={12} sm={8} md={6}>
            <Flip bottom duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={EmployeeDirectory}
                  title="Employee Directory"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Employee Directory
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://ancient-woodland-83161.herokuapp.com/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
          {/* sixth project */}
          <Grid item xs={12} sm={8} md={6}>
            <Flip top duration={1500}>
              <Card className={classes.root}>
                <CardMedia
                  className={classes.media}
                  image={FitnessTracker}
                  title="FitnessTracker"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    Fitness Tracker
                  </Typography>
                </CardContent>

                <CardActions>
                  <Button
                    size="medium"
                    color="default"
                    href="https://mighty-atoll-58338.herokuapp.com/"
                    target="_blank"
                  >
                    Try it!
                  </Button>
                </CardActions>
              </Card>
            </Flip>
          </Grid>
        </Grid>
      </Container>
      <Footer />
    </div>
  );
}

export default Projects;
