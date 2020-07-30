import React from 'react';
import Board from './Board';
import NavBar from './NavBar';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { useDispatch } from 'react-redux';
import { getLogin } from '../reducers/loginSlice';
import { assignUser, newState } from '../reducers/boardSlice';
import { useEffect } from 'react';
import { Redirect } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: theme.spacing(2),
    textAlign: 'left',
    color: theme.palette.text.secondary,
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    color: '#363738',
    fontWeight: theme.typography.fontWeightBold,
  },
}));

const Canvas = (props) => {
  const { logout, loggedIn, username } = props;

  if (!loggedIn) return <Redirect to="/login" />;

  useEffect(() => {
    fetch(`/server/boardState/${username}`)
      .then((response) => response.json())
      .then((data) =>
        dispatch(
          newState({
            username: data.username,
            current: data.current,
            cards: data.cards,
          })
        )
      );
  });

  const classes = useStyles();

  return (
  <div>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <NavBar logout={logout} />
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.heading}>To Do:</Typography>
            <Board id="stack" />
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper className={classes.paper}>
            <Typography className={classes.heading}>In Progress:</Typography>
            <Board id="inProgress" />
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper className={classes.paper}>
            <Typography className={classes.heading}>Completed:</Typography>
            <Board id="complete" />
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Canvas;
