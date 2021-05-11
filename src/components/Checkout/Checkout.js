import { Card, CardContent, CardMedia, Container, CssBaseline, Grid, makeStyles, Paper, Typography } from '@material-ui/core';
import { Timeline, TimelineItem, TimelineSeparator, TimelineDot, TimelineConnector, TimelineContent } from '@material-ui/lab';
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import GoogleMap from '../GoogleMap/GoogleMap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee } from '@fortawesome/free-solid-svg-icons'

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
    media: {
        height: '50px'
    },
    paper: {
        
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
                    <Grid container spacing={3} direction="row">
                        <Grid item xs={12} md={3} lg={3}>
                            <Paper className={classes.paper} elevation={0} color="primary">
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
                                        <Grid item xs={6} sm={3}>
                                            <CardMedia className={classes.media} image={getRide.image} title={getRide.transport} />
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="h5" component="h2">{getRide.transport}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="h5" component="h2"><FontAwesomeIcon icon={faCoffee} /> {getRide.capacity}</Typography>
                                        </Grid>
                                        <Grid item xs={6} sm={3}>
                                            <Typography variant="h5" component="h2">{getRide.price}$</Typography>
                                        </Grid>
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