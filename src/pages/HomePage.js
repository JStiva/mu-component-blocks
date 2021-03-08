import React from "react";
import { Link } from "react-router-dom";

import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(10)
    },
    cardRoot: {
        minWidth: 275,
    },
    bullet: {
        display: 'inline-block',
        margin: '0 2px',
        transform: 'scale(0.8)',
    },
    title: {
        fontSize: 18,
    },
    pos: {
        marginBottom: 12,
    },
    marginTop: {
        marginTop: theme.spacing(10)
    },
    textDecor: {
        textDecoration: "none"
    }
}));

const HomePage = () => {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Typography variant="h4" gutterBottom>
                Ready-to-use component blocks build with Material-UI
            </Typography>
            <Grid container className={classes.marginTop} spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Link to="/mu/pricing-plan-page" className={classes.textDecor}>
                        <Card className={classes.cardRoot} variant="outlined">
                            <CardContent>
                                <Typography className={classes.title} color="textSecondary" gutterBottom>
                                    Pricing Plan
                                </Typography>
                            </CardContent>
                        </Card>
                    </Link>
                </Grid>
            </Grid>
        </div>
    )
};

export default HomePage;
