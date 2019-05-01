// prettier-ignore
import { withWidth } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithWidth } from "@material-ui/core/withWidth";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Route, RouteComponentProps, Router } from "react-router-dom";
// config
import { history } from "./redux/configureStore";
import { RootState } from "./redux/rootReducer";
import withRoot from "./withRoot";
// pages
import HomePage from "./pages/HomePage";
import TodoPage from "./pages/TodoPage";
import Login from "./pages/Login/Login";

function Routes() {
	const classes = useStyles();

	return (
		<div className={classes.content}>
			<Route exact={true} path="/" component={Login} />
			<Route exact={true} path="/home" component={HomePage} />
			<Route exact={true} path="/todo" component={TodoPage} />
		</div>
	);
}

interface Props extends RouteComponentProps<void>, WithWidth {}

function App(props?: Props) {
	const classes = useStyles();
	if (!props) {
		return null;
	}

	return (
		<Router history={history}>
			<div className={classes.root}>
				<div className={classes.appFrame}>
					<Routes />
				</div>
			</div>
		</Router>
	);
}

const drawerWidth = 240;
const useStyles = makeStyles((theme: Theme) => ({
	root: {
		width: "100%",
		height: "100%",
		zIndex: 1,
		overflow: "hidden",
	},
	appFrame: {
		position: "relative",
		display: "flex",
		width: "100%",
		height: "100%",
	},
	appBar: {
		zIndex: theme.zIndex.drawer + 1,
		position: "absolute",
	},
	navIconHide: {
		[theme.breakpoints.up("md")]: {
			display: "none",
		},
	},
	drawerHeader: theme.mixins.toolbar,
	drawerPaper: {
		width: 250,
		backgroundColor: theme.palette.background.default,
		[theme.breakpoints.up("md")]: {
			width: drawerWidth,
			position: "relative",
			height: "100%",
		},
	},
	content: {
		backgroundColor: theme.palette.background.default,
		width: "100%",
		height: "calc(100% - 56px)",
		marginTop: 56,
		[theme.breakpoints.up("sm")]: {
			height: "calc(100% - 64px)",
			marginTop: 64,
		},
	},
}));

function mapStateToProps(state: RootState) {
	return {
		todoList: state.todoList,
	};
}

export default connect(mapStateToProps)(withRoot(withWidth()(App)));
