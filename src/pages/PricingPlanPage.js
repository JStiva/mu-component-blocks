import React from "react";
import PricingPlan from "../components/PricingPlan";
import SourceCode from "../components/SourceCode";

import { makeStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';


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


const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        marginTop: theme.spacing(4)
    },
    indicator: {
        backgroundColor: theme.palette.primary.light
    },
    tabRoot: {
        "&:hover": {
            color: "primary",
            opacity: 1
        },
    },
    tabSelected: {
        color: theme.palette.primary.light,
    },

}));

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

const PricingPlanPage = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
                centered
                classes={{
                    indicator: classes.indicator,
                }}
            >
                <Tab
                    label="Preview"
                    {...a11yProps(0)}
                    classes={{
                        root: classes.tabRoot, selected: classes.tabSelected
                    }}
                />
                <Tab
                    label="Source Code"
                    {...a11yProps(1)}
                    classes={{
                        root: classes.tabRoot, selected: classes.tabSelected
                    }} />
            </Tabs>
            <TabPanel value={value} index={0}>
                <PricingPlan />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <SourceCode fileName={"PricingPlan.js"} />
            </TabPanel>
        </div>
    )
};

export default PricingPlanPage;
