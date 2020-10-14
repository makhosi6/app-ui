import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Divider from "./Divider"
import { ClockIcon, GlobeIcon } from "@fluentui/react-icons";
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
  root: {
    boxShadow: "none",
    margin: "0 auto",
    display: "flex",
    maxWidth: 1000,
  },
  paper: {
    boxShadow: "none",
    padding: theme.spacing(1),
    // background: "#ecececde",
    maxWidth: 1000,
  },
  details: {
    display: "flex",
    maxHeight: "fit-content",
    flexDirection: "column",
    width: "100%",
  },
  content: {
    // backgroundColor: "#ecececde",
    maxWidth: 1000,
    flex: "5 0 auto",
  },
  cover: {
    // backgroundColor: "#ecececde",
    [theme.breakpoints.down("sm")]: {
      display: "none",
    },
    maxHeight: "150px",
    margin: "0 auto",
    width: "40%",
    // borderRightColor: "#bfbbbb",
  },
  controls: {
    // backgroundColor: "#/ecececde",
    maxWidth: "100%",
    display: "flex",
    paddingLeft: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  playIcon: {
    height: 38,
    width: 38,
  },
  icon: {
    float: "right",
  },
}));
export default function Article(prop) {
  const classes = useStyles();

  return (
    <>
    <article>
      <Card className={classes.root}>
        <div className={classes.details}>
          <Paper className={classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      color="textSecondary"
                      gutterBottom
                      variant="body2"
                    ></Typography>{" "}
                    <Typography variant="subtitle1" gutterBottom>
                      <Box
                        fontWeight="fontWeightBold"
                        lineHeight="normal"
                        m={1}
                      >
                        <Link color="inherit" href="/article/title-here-636348">
                        Risks while isolating due to COVID-19
                        </Link>{" "}
                      </Box>{" "}
                    </Typography>{" "}
                    <Typography variant="body2">
                      <Box boxShadow={0} lineHeight="normal" m={1}>
                      Tips for coping with stress at home and actions to take if you or your family members are experiencing violence
                      </Box>{" "}
                    </Typography>{" "}
                  </Grid>{" "}
                  <Grid item>
                    <Typography
                      variant="body2"
                      color="textSecondary"
                      style={{ cursor: "pointer" }}
                    >
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={0}
                        m={1}
                      >
                        <Text4>
                          <ClockIcon style={{ marginBottom: "5px", color: "#776f6f" }} /> Oct 5,
                          2019
                        </Text4>
                      </Box>{" "}
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={1}
                        m={1}
                      >
                        <Text3>
                          <Link
                            color="inherit"
                            href="/article/title-here-636348"
                          >
                            <GlobeIcon 
                              style={{ marginBottom: "5px" , color: "#776f6f",marginRight: "5px"}} 
                            /> 
                           un.org
                          </Link>
                        </Text3>
                      </Box>{" "}
                      <Box
                        lineHeight="normal"
                        style={{ cursor: "auto" }}
                        component="div"
                        display="inline"
                        p={1}
                        m={1}
                      />
                    </Typography>{" "}
                  </Grid>{" "}
                </Grid>{" "}
              </Grid>{" "}
            </Grid>{" "}
          </Paper>{" "}
        </div>{" "}
      </Card>
      <Divider
          style={{
            maxWidth: "1000px",
            margin: "auto",
            height: 1,
            alignSelf: "stretch",
            flex: "0 0 auto"
          }}
        ></Divider>
    </article>
    </>
  );
}

const Text3 = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: #000000;
  font-size: 14px;
  margin-top: 1px;
`;

const Text4 = styled.span`
  font-family: 	'Segoe UI Web Regular', 'Segoe UI', 'Segoe WP', Tahoma, Arial, sans-serif !important;
  color: #000000;
  font-size: 14px;
  margin-top: 3px;
`;
