import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        textDecoration: 'none'
    },
}));

const Header = () => {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Toolbar>
                <Typography variant="h6" className={classes.title} component={Link} to="/">Safe Ride</Typography>
                <Button color="inherit" component={Link} to="/home">Home</Button>
                <Button color="inherit" component={Link} to="/destination">Destination</Button>
                <Button color="inherit" component={Link} to="/login">Login</Button>
            </Toolbar>
        </div>
    );
};

export default Header;