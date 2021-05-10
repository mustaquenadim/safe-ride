import React from 'react';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textDecoration: 'none',
    },
    paper: {
        textAlign: 'center',
    },
    media: {
        height: 200,
    },
    card: {
        padding: '25px'
    }
}));

const Vehicle = (props) => {
    const classes = useStyles();
    const { id, transport, image } = props.vehicle;
    return (
        <Grid item xs={12} md={6} lg={3}>
            <Paper elevation={3} className={classes.paper}>
                <Card className={classes.root} component={Link} to={`/destination/${id}`}>
                    <CardActionArea>
                        <CardContent className={classes.card}>
                            <CardMedia className={classes.media} image={image} title={transport} />
                        </CardContent>
                        <Typography variant="h5" component="h2">{transport}</Typography>
                    </CardActionArea>
                </Card>
            </Paper>
        </Grid>
    );
};

export default Vehicle;