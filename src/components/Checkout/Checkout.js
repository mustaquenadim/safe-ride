import { Card, CardContent, Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';
import React, { useContext, useEffect, useState } from 'react';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Checkout = () => {
    const {getRide, setRide} = useContext(UserContext);
    const classes = useStyles();
    console.log(getRide);
    return (
        <div>
            <React.Fragment>
            <CssBaseline />
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper elevation={0} color="primary">
                                <Timeline>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        <TimelineConnector />
                                        </TimelineSeparator>
                                        <TimelineContent>{getRide.from}</TimelineContent>
                                    </TimelineItem>
                                    <TimelineItem>
                                        <TimelineSeparator>
                                        <TimelineDot />
                                        </TimelineSeparator>
                                        <TimelineContent>{getRide.to}</TimelineContent>
                                    </TimelineItem>
                                </Timeline>
                                <Card className={classes.root} style={{backgroundColor: 'yellow'}}>
                                    <CardContent>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>Date: {getRide.date}</Typography>
                                        <Typography className={classes.title} color="textSecondary" gutterBottom>Time: {getRide.time}</Typography>
                                    </CardContent>
                                </Card>
                                <Card className={classes.root} style={{backgroundColor: 'yellow'}}>
                                    <CardContent>
                                    <Grid container spacing={3}>
                                        <Grid item xs={6} sm={3}></Grid>
                                        <Grid item xs={6} sm={3}></Grid>
                                        <Grid item xs={6} sm={3}></Grid>
                                        <Grid item xs={6} sm={3}></Grid>
                                    </Grid>
                                    </CardContent>
                                </Card>
                            </Paper>
                        </Grid>
                        <Grid item xs={12} md={9} lg={9}>
                            <GoogleMap />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
        </div>
    );
};

export default Checkout;