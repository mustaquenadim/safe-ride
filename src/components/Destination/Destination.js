import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Container, CssBaseline, Grid, makeStyles, TextField } from '@material-ui/core';
import { KeyboardDatePicker, KeyboardTimePicker, MuiPickersUtilsProvider } from '@material-ui/pickers';
import DateFnsUtils from '@date-io/date-fns';
import vehicles from '../../Data/Data.json';
import { useParams } from 'react-router-dom';
import { UserContext } from '../../App';
import { useHistory } from 'react-router-dom';
import GoogleMap from '../GoogleMap/GoogleMap';

const useStyles = makeStyles(() => ({
    root: {
        flexGrow: 1,
    },
}));

const Destination = () => {
    const {getRide, setRide} = useContext(UserContext);
    const history = useHistory();
    const classes = useStyles();
    const btnStyle = {margin: '8px 0'};
    const { id } = useParams();
    const [vehicle, setVehicle] = useState({});
    useEffect(() => {
        const info = vehicles.filter((type) => id == type.id);
        setVehicle(info[0]);
    }, [id]);
    const {image, transport, capacity, price} = vehicle;
    const { register, handleSubmit, errors } = useForm();
    const onSubmit = (data) => {
        const { from, to } = data;
        const journeyInfo = { status: true, from, to, date: selectedDate.getDate() + '/' + (selectedDate.getMonth()+1) + '/' + selectedDate.getFullYear(), time: selectedDate.getHours() + ":" + selectedDate.getMinutes(), image, transport, capacity, price };
        setRide(journeyInfo);
        history.replace({ pathname: "/checkout" });
    };
    const [selectedDate, setSelectedDate] = useState(new Date());
    const handleDateChange = (date) => {
        setSelectedDate(date);
    };
    return (
        <React.Fragment>
            <CssBaseline />
            <Container>
                <div className={classes.root}>
                    <Grid container spacing={3} direction="row">
                        <Grid color='primary' item xs={12} md={3} lg={3}>
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <TextField fullWidth margin="normal" id="journey-from" label="Journey From" type='text' name='from' inputRef={register({required: "This field is required."})} error={Boolean(errors.from)} helperText={errors.from?.message} />
                                <TextField fullWidth margin="normal" id="journey-to" label="Journey To" type='text' name='to' inputRef={register({required: "This field is required."})} error={Boolean(errors.to)} helperText={errors.to?.message} />
                                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                                    <KeyboardDatePicker fullWidth variant="inline" format="dd/MM/yyyy" margin="normal" id="journey-date" label="Journey Date" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change date' }} />
                                    <KeyboardTimePicker fullWidth variant="inline" margin="normal" id="journey-time" label="Journey Time" value={selectedDate} onChange={handleDateChange} KeyboardButtonProps={{ 'aria-label': 'change time' }} />
                                </MuiPickersUtilsProvider>
                                <Button type='submit' color='secondary' variant="contained" style={btnStyle} fullWidth>Search</Button>
                            </form>
                        </Grid>
                        <Grid item xs={12} md={9} lg={9}>
                            <GoogleMap />
                        </Grid>
                    </Grid>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Destination;