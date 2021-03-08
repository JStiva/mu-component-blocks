import React, { useEffect } from "react";
import Highlight, { defaultProps } from "prism-react-renderer";
import vsLight from 'prism-react-renderer/themes/vsLight';

import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            padding: theme.spacing(4),
            width: "100%",
            height: "auto",
        },
    },
    paperStyle: {
        overflowX: "auto"
    }
}));

const SourceCode = ({ fileName }) => {
    const classes = useStyles();
    const [code, setCode] = React.useState("");

    useEffect(() => {
        const getCodeFromFile = async () => {
            const response = await fetch(`../data/${fileName}`);
            const code = await response.text();
            setCode(code);
        }
        getCodeFromFile();
    }, [fileName])

    return (
        <div className={classes.root}>
            <Paper elevation={0} className={classes.paperStyle}>
                <Highlight {...defaultProps} theme={vsLight} code={code} language="jsx">
                    {({ className, style, tokens, getLineProps, getTokenProps }) => (
                        <pre className={className} style={style}>
                            {tokens.map((line, i) => (
                                <div {...getLineProps({ line, key: i })}>
                                    {line.map((token, key) => (
                                        <span {...getTokenProps({ token, key })} />
                                    ))}
                                </div>
                            ))}
                        </pre>
                    )}
                </Highlight>
            </Paper>
        </div>
    )
};

export default SourceCode;
