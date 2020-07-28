import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from 'react-countup';
import styles from "./Cards.module.css";

const Cards = ({data:{confirmed,recovered,deaths,lastUpdate}}) => {
  if(!confirmed){
    return 'Loading....'
  }
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <Grid item component={Card} xs={12} md={3} className={styles.activeCases}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Confirmed Cases</Typography>
              <Typography variant="h5">
              <CountUp 
                start={0}
                end={confirmed.value}
                duration={1.5}
                separator=","
                variant="h5"
              />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.confirmDeaths}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Confirmed Deaths</Typography>
              <Typography variant="h5">
              <CountUp 
                start={0}
                end={deaths.value}
                duration={1.5}
                separator=","
                variant="h5"
              />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
        <Grid item component={Card} xs={12} md={3} className={styles.recovered}>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>Confirmed Recovered</Typography>
              <Typography variant="h5">
              <CountUp 
                start={0}
                end={recovered.value}
                duration={1.5}
                separator=","
                variant="h5"
              />
              </Typography>
              <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
            </CardContent>
        </Grid>
      </Grid>
    </div>
  );
};

export default Cards;
