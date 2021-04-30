import React, { useEffect, useState } from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import vehicles from '../../Data/Data.json';
import Vehicle from '../Vehicle/Vehicle';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
}));

const Home = () => {
    const classes = useStyles();
    const [ride, setRide] = useState([]);
    useEffect(() => {
        setRide(vehicles);
    }, []);
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                        {ride.map((vehicle) => (<Vehicle key={vehicle.id} vehicle={vehicle}></Vehicle>))}
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Home;