import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import GTranslateRoundedIcon from '@material-ui/icons/GTranslateRounded';
import firebase from 'firebase/app';
import 'firebase/auth';
import { firebaseConfig } from './firebase.config';

const useStyles = makeStyles((theme) => ({
    margin: {
        margin: theme.spacing(1),
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
    },
}));

const FireAuth = () => {
    const classes = useStyles();

    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: '/' } };
    if (!firebase.apps.length) { firebase.initializeApp(firebaseConfig) }
    const handleGoogleSignIn = () => {
        var provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then((result) => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = {
                    isSignedIn: true,
                    name: displayName,
                    email: email,
                    photo: photoURL
                }
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }
    const handleFacebookSignIn = () => {
        console.log('object');
    }
    const handleGithubSignIn = () => {
        console.log('click');
    }
    return (
        <div style={{textAlign: 'center'}}>
            <Typography variant="body2" gutterBottom>OR</Typography>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={handleGoogleSignIn}>
                <GTranslateRoundedIcon className={classes.extendedIcon} /> Continue with Google
            </Fab>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={handleFacebookSignIn}>
                <GTranslateRoundedIcon className={classes.extendedIcon} /> Continue with Facebook
            </Fab>
            <Fab variant="extended" color="primary" aria-label="add" className={classes.margin} onClick={handleGithubSignIn}>
                <GTranslateRoundedIcon className={classes.extendedIcon} /> Continue with Github
            </Fab>
        </div>
    );
};

export default FireAuth;