import React, { Fragment } from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./HomePage";
import About from "./About";
import Experience from "./Experience";
import { makeStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
  },
}));

function Router() {
  const classes = useStyle();
  return (
    <Fragment>
      <div className={classes.root}>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/about" component={About} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </div>
    </Fragment>
  );
}

export default Router;
