import React, {useState, useEffect} from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import * as ROUTES from '../../constants/routes';

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
    button: {
      margin: theme.spacing(1),
    },
  }),
);

export default function NavBar() {
  const [state, setState] = useState({
    mobile: false,
    drawerOpen: false
  });
  const {mobile} = state;

  const classes = useStyles();

  //Monitors the size of the window and applies a mobile or desktop view depending on size
  useEffect(() => {
    const setResponsiveness = () => {
      return window.innerWidth < 900
        ? setState((prevState) => ({ ...prevState, mobile: true }))
        : setState((prevState) => ({ ...prevState, mobile: false }));
    };
    setResponsiveness();
    window.addEventListener("resize", () => setResponsiveness());
  }, []);

  return (
    <>
    <div className={classes.root}>
      <AppBar position="static" style={{background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)'}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Alistair Godwin
          </Typography>
  
          <ButtonGroup variant="text" color="secondary" aria-label="text primary button group">
            <Button component={Link} to='/'>Home</Button>
            <Button component={Link} to='/work'>Work</Button>
            <Button component={Link} to='/education'>Education</Button>
            <Button component={Link} to='/projects'>Projects</Button>
            <Button component={Link} to='/about'>About</Button>
            <h1>{String(state.mobile)}</h1>
          </ButtonGroup>

        </Toolbar>
      </AppBar>
    </div>
    </>
  );
}