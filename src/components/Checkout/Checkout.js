import { Container, CssBaseline, Grid, makeStyles } from '@material-ui/core';
import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import vehicles from '../../Data/Data.json';
import GoogleMap from '../GoogleMap/GoogleMap';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Checkout = () => {
    const {getRide, setRide} = useContext(UserContext);
    console.log(getRide);
    const classes = useStyles();
    const { id } = useParams();
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        const info = vehicles.filter((type) => id == type.id);
        setVehicle(info[0]);
    }, [id]);
    return (
        <div>
            <React.Fragment>
            <CssBaseline />
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row" justify="center" alignItems="center">
                        <Grid item xs={12} md={3} lg={3}>
                            <h1>Checkout</h1>
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