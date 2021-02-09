import React from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);

export default function NavBar() {
  const classes = useStyles();

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            Alistair Godwin
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}