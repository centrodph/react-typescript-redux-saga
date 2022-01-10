import React, { useState, useEffect } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";

// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
// redux
import { RootState } from "../../redux/rootReducer";
import { Todo } from "../../model/model";
import * as LoginActions from "../../redux/authentication/authenticationActions";
// elements
import FieldUsername from 'elements/FieldUsername/FieldUsername';
import FieldPassWord from 'elements/FieldPassword/FieldPassword';
import { useNavigate } from "react-router-dom";

const styles = (theme: Theme) => createStyles({
  main: {
    width: "auto",
    display: "block", // Fix IE 11 issue.
    marginLeft: '2rem',
    marginRight: '2rem',
    [theme.breakpoints.up(600)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: '2rem',
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${3}px ${5}px ${5}px`
  },
  avatar: {
    margin: '0.5rem',
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: '0.5rem',
  },
  submit: {
    marginTop: '0.5rem'
  }
});


interface Props {
  classes: any;
  todoList: Todo[];
  actions: typeof LoginActions;
  token: string | null;
}

function Login(props: Props) {
  const { classes } = props;
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();


  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.actions.loginUserAction({
      username,
      password
    });
  };
  useEffect(() => {
    if(props.token) {
      navigate('/listing');
    }
  });
  return (
    <main className={classes.main}>
      <CssBaseline />
      <Paper className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} onSubmit={handleSubmit}>
          <FieldUsername value={username} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(String(e.target.value))} />
          <FieldPassWord value={password} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(String(e.target.value))} />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            Sign in
          </Button>
        </form>
      </Paper>
    </main>
  );
}

const mapStateToProps = (state: RootState) => ({
  token: state.loginForm.token,
});

function mapDispatchToProps(dispatch: any) {
  return {
    actions: bindActionCreators(LoginActions as any, dispatch),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withStyles(styles)(Login));
