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
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    media: {
        height: 200,
    },
}));

const Vehicle = (props) => {
    const classes = useStyles();
    const { id, transport, image } = props.vehicle;

    return (
        <Grid item xs={12} md={6} lg={3}>
            <Paper className={classes.paper}>
                <Card className={classes.root} component={Link} to={`/destination/${id}`}>
                    <CardActionArea>
                        <CardMedia className={classes.media} image={image} title={transport} />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">{transport}</Typography>
                        </CardContent>
                    </CardActionArea>
                </Card>
            </Paper>
        </Grid>
    );
};

export default Vehicle;