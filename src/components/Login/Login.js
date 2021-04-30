import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import SignIn from './SignIn';
import SignUp from './SignUp';

function TabPanel(props) {
    const { children, value, index, ...other } = props;
    return (
        <div role="tabpanel" hidden={value !== index} id={`simple-tabpanel-${index}`} aria-labelledby={`simple-tab-${index}`} {...other}>
            {value === index && (<Box p={3}><Typography>{children}</Typography></Box>)}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    }
}));

const Login = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const handleChange = (event, newValue) => {setValue(newValue)};

    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth="sm">
                <div className={classes.root}>
                    <Tabs value={value} onChange={handleChange} aria-label="login tabs">
                        <Tab label="Sign In" {...a11yProps(0)} />
                        <Tab label="Sign Up" {...a11yProps(1)} />
                    </Tabs>
                    <TabPanel value={value} index={0}><SignIn handleChange={handleChange} /></TabPanel>
                    <TabPanel value={value} index={1}><SignUp handleChange={handleChange} /></TabPanel>
                </div>
            </Container>
        </React.Fragment>
    );
};

export default Login;