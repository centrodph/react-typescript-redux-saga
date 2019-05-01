import React, { useState } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
// material ui
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import withStyles from "@material-ui/core/styles/withStyles";
import FormControl from "@material-ui/core/FormControl";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import { Theme } from '@material-ui/core/styles/createMuiTheme';
import createStyles from '@material-ui/core/styles/createStyles';
// redux
import { RootState } from "../../redux/rootReducer";
import { Todo } from "../../model/model";
import * as LoginActions from "../../redux/authentication/authenticationActions";


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


interface Props extends RouteComponentProps<any> {
  classes: any;
  todoList: Todo[];
	actions: typeof LoginActions;
}

function Login(props: Props) {
  const { classes } = props;
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    props.actions.loginUserAction({
      email,
      password
    });
  };
  // if (isSuccess) {
  //   setCookie("token", this.props.response.login.response.token, 1);
  // }
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
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="email">Email Address</InputLabel>
            <Input id="email" name="email" autoComplete="email" />
          </FormControl>
          <FormControl margin="normal" required fullWidth>
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input
              name="password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </FormControl>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
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
  response: state
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
