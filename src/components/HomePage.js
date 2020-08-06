import React from "react";
import { makeStyles, Grid, Typography } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
  },
  pageContent: {
    paddingTop: theme.spacing(10),
  },
  typography: {
    align: "center",
  },
  introduction: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(36),
    lineHeight: theme.typography.pxToRem(24),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(24),
      lineHeight: theme.typography.pxToRem(16),
    },

    textAlign: "center",
  },
  name: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(48),
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(32),
    },
    // lineHeight: "24px"
  },
  description: {
    color: theme.palette.primary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(20),
    },
    textAlign: "center",
    // lineHeight: "40px"
  },
  favouriteText: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    marginTop: theme.spacing(10),
    fontSize: theme.typography.pxToRem(48),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(32),
    },
  },
  favourite: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: theme.typography.pxToRem(30),
    [theme.breakpoints.down("xs")]: {
      fontSize: theme.typography.pxToRem(20),
    },
  },
}));
function HomePage() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ minHeight: "100vh" }}
      >
        <Grid
          container
          item
          lg={12}
          sm={9}
          xs={12}
          spacing={0}
          direction="column"
          alignItems="center"
          className={classes.pageContent}
        >
          <Grid item xs={6}>
            <Typography
              variant="h4"
              gutterBottom
              className={classes.introduction}
            >
              Hello! I am
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom className={classes.name}>
              LAKSHMIPRIYA
            </Typography>
          </Grid>

          <Grid item md={6} xs={8}>
            <Typography
              variant="h3"
              gutterBottom
              className={classes.description}
            >
              Senior Software Engineer
            </Typography>
          </Grid>

          <Grid item xs={6}>
            <Typography
              variant="h3"
              gutterBottom
              className={classes.favouriteText}
            >
              I Love
            </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography variant="h3" gutterBottom className={classes.favourite}>
              Tech
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default HomePage;
