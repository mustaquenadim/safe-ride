import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { Grid, Paper, Avatar, TextField, Button, Typography, Link } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import { useForm } from 'react-hook-form';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';
import FireAuth from './FireAuth';

const SignIn = ({handleChange}) => {
    const paperStyle = {padding: 20, height:'73vh', margin:"0 auto"};
    const avatarStyle = {backgroundColor: '#1bbd7e'};
    const btnStyle = {margin: '8px 0'};

    const {loggedInUser, setLoggedInUser} = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const {email, password} = data;
        firebase.auth().signInWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response.user);
                setLoggedInUser(response.user);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    return(
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth label='Email' type='email' name='email' placeholder="Enter your email" inputRef={register({ required: "Please enter a valid email.", pattern: /\S+@\S+\.\S+/ })} error={Boolean(errors.email)} helperText={errors.email?.message} />
                    <TextField fullWidth label='Password' type='password' name='password' placeholder="Enter your password" inputRef={register({ required: "Password is required.", minLength: 6 })} error={Boolean(errors.password)} helperText={errors.password?.message} />
                    <FormControlLabel control={<Checkbox name="checkedB" color="primary" />} label="Remember me" />
                    <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign In</Button>
                </form>
                <Typography style={{textAlign: 'center'}}><Link href="#">Forgot password?</Link></Typography>
                <Typography style={{textAlign: 'center'}}>Don't have an account? <Link href="#" onClick={() => handleChange("event", 1)}>Sign Up</Link></Typography>
                <FireAuth />
            </Paper>
        </Grid>
    )
}

export default SignIn;