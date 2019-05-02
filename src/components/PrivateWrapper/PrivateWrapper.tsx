import React from 'react';
import { createStyles, withStyles, WithStyles } from '@material-ui/core/styles';
import AppBar from 'components/AppBar/AppBar';

const styles = createStyles({
    root: {
        flexGrow: 1,
    },
});

export interface Props extends WithStyles<typeof styles> {
    children: React.ReactChild
 }

function PrivateWrapper(props: Props) {
    const { classes } = props;
    return (
        <div className={classes.root}>
            <AppBar />
            {props.children}
        </div>
    );
}

export default withStyles(styles)(PrivateWrapper);