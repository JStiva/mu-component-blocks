import React from "react";

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';
import CheckIcon from '@material-ui/icons/Check';
import Button from '@material-ui/core/Button';
import Badge from '@material-ui/core/Badge';


const useStyles = makeStyles((theme) => ({
    wrapper: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(4, 1, 1, 4),
            padding: theme.spacing(4),
            width: "100%",
            height: "auto",
        },
    },
    root: {
        width: '100%',
        marginTop: theme.spacing(8)
    },
    indicator: {
        backgroundColor: "transparent"
    },
    tabRoot: {
        "&:hover": {
            color: "primary",
            opacity: 1
        },
    },
    tabSelected: {
        border: "1px solid",
        borderColor: theme.palette.primary.main,
        borderRadius: "25px",
        color: theme.palette.primary.main,
    },
    paperStyle: {
        padding: theme.spacing(4)
    },
    marginTop: {
        marginTop: theme.spacing(4)
    },
    badgeRoot: {
        display: "block"
    },
    marginRight: {
        marginRight: theme.spacing(4)
    }
}));

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={2}>
                    <div>{children}</div>
                </Box>
            )}
        </div>
    );
}

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PricingPlan = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.wrapper}>
            <Paper elevation={0}>
                <Typography
                    variant="h4"
                    gutterBottom
                    align="center"
                    classes={{ root: classes.marginTop }}>
                    Pricing Plans
                </Typography>
                <Typography variant="body1" gutterBottom align="center">
                    Choose from a plan which suits your needs best
                </Typography>

                <div className={classes.root}>
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="simple tabs example"
                        centered
                        classes={{
                            indicator: classes.indicator,
                        }}>
                        <Tab
                            label="Monthly"
                            {...a11yProps(0)}
                            classes={{
                                root: classes.tabRoot, selected: classes.tabSelected
                            }}
                        />
                        <Tab
                            label="Yearly"
                            {...a11yProps(1)}
                            classes={{
                                root: classes.tabRoot, selected: classes.tabSelected
                            }} />
                    </Tabs>
                    <TabPanel value={value} index={0}>
                        <Grid container spacing={4} className={classes.marginTop}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper elevation={0} className={classes.paperStyle}>
                                    <List component="nav" aria-label="basic-monthly">
                                        <ListItem>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                                className={classes.paddingLeft}>
                                                Basic
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Up to 3 projects" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Full security" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="1 email account" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="MySQL support" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav" aria-label="basic-monthly-price">
                                        <ListItem >
                                            <Typography variant="h4" color="textSecondary">
                                                $ 0
                                            </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Button variant="outlined" fullWidth>Try</Button>
                                        </ListItem>
                                    </List>

                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Badge
                                    color="primary"
                                    badgeContent="Promo"
                                    className={classes.badgeRoot}
                                    classes={{
                                        anchorOriginTopRightRectangle: classes.marginRight
                                    }}>
                                    <Paper elevation={2} className={classes.paperStyle}>
                                        <List component="nav" aria-label="standard-monthly">
                                            <ListItem>
                                                <Typography variant="h6" gutterBottom >
                                                    Standard
                                            </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Up to 3 projects" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Full security" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="1 email account" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="MySQL support" />
                                            </ListItem>
                                        </List>
                                        <Divider />
                                        <List component="nav" aria-label="standard-monthly-price">
                                            <ListItem >
                                                <Typography variant="h4" color="primary">
                                                    $ 49
                                            </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth>Buy</Button>
                                            </ListItem>
                                        </List>
                                    </Paper>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper elevation={0} className={classes.paperStyle}>
                                    <List component="nav" aria-label="pro-monthly">
                                        <ListItem>
                                            <Typography variant="h6" gutterBottom >
                                                Pro
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Up to 3 projects" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Full security" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="1 email account" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="MySQL support" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav" aria-label="pro-monthly-price">
                                        <ListItem >
                                            <Typography variant="h4" color="secondary">
                                                $ 149
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth>Buy</Button>
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                    </TabPanel>
                    <TabPanel value={value} index={1}>
                        <Grid container spacing={4} className={classes.marginTop}>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper elevation={0} className={classes.paperStyle}>
                                    <List component="nav" aria-label="basic-yearly">
                                        <ListItem>
                                            <Typography
                                                variant="h6"
                                                gutterBottom
                                                className={classes.paddingLeft}>
                                                Basic
                                        </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Up to 3 projects" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Full security" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="1 email account" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="MySQL support" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav" aria-label="basic-yearly-price">
                                        <ListItem >
                                            <Typography variant="h4" color="textSecondary">
                                                $ 0
                                            </Typography>
                                        </ListItem>
                                        <ListItem >
                                            <Button variant="outlined" fullWidth>Try</Button>
                                        </ListItem>
                                    </List>

                                </Paper>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Badge
                                    color="primary"
                                    badgeContent="Promo"
                                    className={classes.badgeRoot}
                                    classes={{
                                        anchorOriginTopRightRectangle: classes.marginRight
                                    }}>
                                    <Paper elevation={2} className={classes.paperStyle}>
                                        <List component="nav" aria-label="standard-yearly">
                                            <ListItem>
                                                <Typography variant="h6" gutterBottom >
                                                    Standard
                                            </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Up to 3 projects" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Full security" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="1 email account" />
                                            </ListItem>
                                            <ListItem>
                                                <ListItemIcon>
                                                    <CheckIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="MySQL support" />
                                            </ListItem>
                                        </List>
                                        <Divider />
                                        <List component="nav" aria-label="basic-yearly-price">
                                            <ListItem >
                                                <Typography variant="h4" color="primary">
                                                    $ 149
                                            </Typography>
                                            </ListItem>
                                            <ListItem>
                                                <Button
                                                    variant="contained"
                                                    color="primary"
                                                    fullWidth>Buy</Button>
                                            </ListItem>
                                        </List>
                                    </Paper>
                                </Badge>
                            </Grid>
                            <Grid item xs={12} md={6} lg={4}>
                                <Paper elevation={0} className={classes.paperStyle}>
                                    <List component="nav" aria-label="pro-yearly">
                                        <ListItem>
                                            <Typography variant="h6" gutterBottom >
                                                Pro
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Up to 3 projects" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="Full security" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="1 email account" />
                                        </ListItem>
                                        <ListItem>
                                            <ListItemIcon>
                                                <CheckIcon />
                                            </ListItemIcon>
                                            <ListItemText primary="MySQL support" />
                                        </ListItem>
                                    </List>
                                    <Divider />
                                    <List component="nav" aria-label="pro-yearly-price">
                                        <ListItem >
                                            <Typography variant="h4" color="secondary">
                                                $ 449
                                            </Typography>
                                        </ListItem>
                                        <ListItem>
                                            <Button
                                                variant="contained"
                                                color="secondary"
                                                fullWidth>Buy</Button>
                                        </ListItem>
                                    </List>
                                </Paper>
                            </Grid>
                        </Grid>
                    </TabPanel>
                </div>
            </Paper>
        </div>
    )
};

export default PricingPlan;
