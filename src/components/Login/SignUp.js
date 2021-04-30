import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import { Grid, Paper, Avatar, Typography, TextField, Button, Link } from '@material-ui/core'
import AddCircleOutlineOutlinedIcon from '@material-ui/icons/AddCircleOutlineOutlined';
import { useForm } from "react-hook-form";
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

const SignUp = ({handleChange}) => {
    const paperStyle = { padding: 20, height:'73vh', margin:"0 auto" };
    const headerStyle = { margin: 0 };
    const avatarStyle = { backgroundColor: '#1bbd7e' };
    const btnStyle = {margin: '8px 0'};

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    if (!firebase.apps.length) firebase.initializeApp(firebaseConfig);
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => {
        console.log(data);
        const {name, email, password} = data;
        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then((response) => {
                console.log(response.user);
                updateUserName(name);
            })
            .catch((error) => {
                console.log(error.message);
            });
    };
    const updateUserName = (name) => {
        const user = firebase.auth().currentUser;
        user.updateProfile({ displayName: name })
            .then(() => {console.log('Username Updated Successfully.')})
            .catch((error) => {console.log(error)});
    };
    return (
        <Grid>
            <Paper style={paperStyle}>
                <Grid align='center'>
                    <Avatar style={avatarStyle}>
                        <AddCircleOutlineOutlinedIcon />
                    </Avatar>
                    <h2 style={headerStyle}>Sign Up</h2>
                    <Typography variant="body2" gutterBottom>Please fill this form to create an account!</Typography>
                </Grid>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <TextField fullWidth margin="normal" label='Name' type='text' name='name' placeholder="Enter your name" inputRef={register({required: "Name is required."})} error={Boolean(errors.name)} helperText={errors.name?.message} />
                    <TextField fullWidth margin="normal" label='Email' type='email' name='email' placeholder="Enter your email" inputRef={register({ required: "Please enter a valid email.", pattern: /\S+@\S+\.\S+/ })} error={Boolean(errors.email)} helperText={errors.email?.message} />
                    <TextField fullWidth margin="normal" label='Password' type='password' name='password' placeholder="Enter your password" inputRef={register({ required: "Password is required.", minLength: 6 })} error={Boolean(errors.password)} helperText={errors.password?.message} />
                    <TextField fullWidth margin="normal" label='Confirm Password' type='password' name='confirmPassword' placeholder="Confirm your password" inputRef={register({ required: "Password didn't match.", validate: value => value === watch('password') })} error={Boolean(errors.confirmPassword)} helperText={errors.confirmPassword?.message} />
                    <Button type='submit' color='primary' variant="contained" style={btnStyle} fullWidth>Sign Up</Button>
                    <Typography style={{textAlign: 'center'}}>Already have an account? <Link href="#" onClick={() => handleChange("event", 0)}>Sign In</Link></Typography>
                </form>
            </Paper>
        </Grid>
    )
}

export default SignUp;