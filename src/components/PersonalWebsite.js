import React from "react";
import { makeStyles, CssBaseline } from "@material-ui/core";
import NavBar from "./NavBar";
import Router from "./Router";

const useStyle = makeStyles((theme) => ({
  root: {
    padding: "0",
    margin: "0",
    display: "flex",
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column",
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.behindBackground,
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
}));

function PersonalWebsite() {
  const classes = useStyle();
  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />

      <div className={classes.content}>
        {/*<div className={classes.toolbar}/>*/}
        <Router className={classes.root} />
      </div>
    </div>
  );
}

export default PersonalWebsite;
