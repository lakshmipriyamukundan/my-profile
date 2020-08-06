import React, { useState } from "react";
import { Grid, makeStyles, Typography, Hidden } from "@material-ui/core";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const useStyle = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background,
    flexGrow: 1,
    minHeight: "100vh",
    paddingTop: theme.spacing(10),
  },
  pageName: {
    color: theme.palette.secondary.main,
    fontFamily: "Roboto",
    fontStyle: "normal",
    fontWeight: "300",
    fontSize: "30px",
    [theme.breakpoints.down("sm")]: {
      paddingTop: "10px",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(17),
    [theme.breakpoints.down("xs")]: {
      flexBasis: "50%",
    },
    flexBasis: "75%",
    color: theme.palette.headingColor,
    fontFamily: "Roboto",
    fontStyle: "bold",
    fontWeight: "900",
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(14),
    color: theme.palette.primary.main,
    fontStyle: "italic",
    flexBasis: "25%",
    [theme.breakpoints.down("xs")]: {
      flexBasis: "50%",
    },
  },
  expansionPanel: {
    backgroundColor: theme.palette.secondaryBackground,
    color: theme.palette.primary.main,
    border: "1px solid rgba(0, 0, 0, .125)",
    boxShadow: "none",
    "&:not(:last-child)": {
      borderBottom: 0,
    },
    "&:before": {
      display: "none",
    },
    "&$expanded": {
      margin: "auto",
    },
  },
  expansionPanelSummary: {
    backgroundColor: "rgba(0, 0, 0, .03)",
    borderBottom: "1px solid rgba(0, 0, 0, .125)",
    marginBottom: -1,
    minHeight: 56,
    "&$expanded": {
      minHeight: 56,
    },
    content: {
      "&$expanded": {
        margin: "12px 0",
      },
    },
  },
  expansionDetail: {
    flexDirection: "column",
    color: theme.palette.primary.main,
  },
  experienceDescription: {
    color: theme.palette.primary.main,
    textAlign: "justify",
    fontSize: 14,
    fontStyle: "thin",
    fontWeight: "300",
  },
  expansionContent: {
    width: "1400px",
    [theme.breakpoints.down("xs")]: {
      padding: "15px",
      width: "330px",
    },
  },
}));

function Experience() {
  const classes = useStyle();
  const exps = [
    {
      name: "first",
      position: "Junior",
      time: "2015-2017",
      description: "Good",
    },
    {
      name: "second",
      position: "Normal",
      time: "2017-2019",
      description: "Up and Down",
    },
  ];

  const [expanded, setExpanded] = useState("panel0");

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  return (
    <div className={classes.root}>
      <Grid
        container
        direction="row"
        justify="space-between"
        alignItems="center"
        style={{ minHeight: "100%" }}
      >
        <Grid
          container
          item
          lg={12}
          sm={9}
          xs={12}
          alignContent="center"
          justify="space-between"
          direction="column"
        >
          <Grid item>
            <Typography variant="h3" gutterBottom className={classes.pageName}>
              Experince
            </Typography>
          </Grid>
          <Grid item className={classes.expansionContent}>
            {exps.map((exp, i) => (
              <Accordion
                expanded={expanded === `panel${i}`}
                className={classes.expansionPanel}
                onChange={handleChange(`panel${i}`)}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon style={{ color: "#e6f1ff" }} />}
                  aria-controls="panel1bh-content"
                  id="panel1bh-header"
                  className={classes.expansionPanelSummary}
                >
                  <Typography className={classes.heading}>
                    {i + 1}. {exp.name}
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    {exp.position}
                  </Typography>
                  <Hidden xsDown>
                    <Typography className={classes.secondaryHeading}>
                      {exp.time}
                    </Typography>
                  </Hidden>
                </AccordionSummary>
                <AccordionDetails className={classes.expansionDetail}>
                  <Hidden only={["sm", "md", "lg", "xl"]}>
                    <Typography className={classes.secondaryHeading}>
                      {exp.time}
                    </Typography>
                  </Hidden>
                  {exp.description.split("\n").map((para) => (
                    <Typography
                      paragraph
                      className={classes.experienceDescription}
                    >
                      {para}
                    </Typography>
                  ))}
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Experience;
