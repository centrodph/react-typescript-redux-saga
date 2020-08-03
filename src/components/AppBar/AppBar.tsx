import React from 'react';
import { makeStyles } from '@material-ui/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
// redux 
import { removeCookie } from 'utils/cookies';

const useClasses = makeStyles(() => ({
    root: {
        flexGrow: 1,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
    },
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginLeft: -12,
        marginRight: 20,
    },
}));

export default function ButtonAppBar() {
    const classes = useClasses();
    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" color="inherit" className={classes.grow}>
                        Listings
          </Typography>
                    <Button color="inherit" onClick={() => {
                        removeCookie('token');
                        window.location.href = '/';
                    }}>Logout</Button>
                </Toolbar>
            </AppBar>
        </div>
    );
}