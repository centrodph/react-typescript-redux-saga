import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
// redux
import { Listing } from "model/model";
import * as TodoActions from "redux/listing/listingActions";
import { RootState } from "redux/rootReducer";
// components
import ListingTable from "components/ListingTable/ListingTable";

interface Props extends RouteComponentProps<void> {
    listings: Listing[];
    actions: typeof TodoActions;
}

function ListingPage(props: Props) {
    const classes = useStyles();


    const { listings } = props;

    return (
        <Grid container className={classes.root}>
            <Grid item xs={6}>
                <Typography variant="h4" gutterBottom>
                    Todo List
				</Typography>
            </Grid>
            <Grid item xs={6}>
                <div className={classes.buttonContainer}>
                    <Button
                        className={classes.button}
                        variant="contained"
                        color="secondary"
                        onClick={console.log}
                    >
                        Add Todo
					</Button>
                </div>
            </Grid>
            <Grid item xs={12}>
                <ListingTable list={listings} />
            </Grid>
        </Grid>
    );
}

const useStyles = makeStyles((theme: Theme) => ({
    root: {
        padding: 20,
        [theme.breakpoints.down("md")]: {
            paddingTop: 50,
            paddingLeft: 15,
            paddingRight: 15,
        },
    },

    buttonContainer: {
        width: "100%",
        display: "flex",
        justifyContent: "flex-end",
    },

    button: {
        marginBottom: 15,
    },
}));

function mapStateToProps(state: RootState) {
    return {
        listings: state.listingList,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(TodoActions as any, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingPage);
