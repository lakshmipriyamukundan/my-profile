import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
  },
  imageDiv: {
    display: "flex",
    justifyContent: "center",

    [theme.breakpoints.down("sm")]: {
      paddingTop: "96px",
      marginBottom: theme.spacing(5),
    },
    "& img": {
      transition: "transform .1s" /* Animation */,
      "&:hover": {
        transform: "scale(1.1)",
      },
    },
  },
  heading: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
  },
  aboutTxt: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontSize: theme.typography.pxToRem(16),
    textAlign: "justify",
  },
}));

function About() {
  const classes = useStyle();
  console.log("about");
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid container item md={9} lg={12} alignItems="center" direction="row">
          <Grid item xs={12} md={5}>
            <div className={classes.imageDiv}>
              <img
                className={classes.centerCropped}
                src={
                  "https://avatars1.githubusercontent.com/u/19326718?s=260&v=4"
                }
                alt="thumbnail"
              />
            </div>
          </Grid>
          <Grid item xs={12} md={7}>
            <Typography variant="h3" gutterBottom className={classes.heading}>
              About Me!
            </Typography>
            <Typography paragraph className={classes.aboutTxt}>
              Here are a few technologies I've been working with recently:
              <br />
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default About;
