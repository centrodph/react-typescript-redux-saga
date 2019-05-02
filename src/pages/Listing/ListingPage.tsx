import { Button, Grid, Typography } from "@material-ui/core";
import { Theme } from "@material-ui/core/styles";
import { WithStyles, createStyles, withStyles } from '@material-ui/core/styles';

import * as React from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";
// redux
import { Listing } from "model/model";
import * as listingActions from "redux/listing/listingActions";
import { RootState } from "redux/rootReducer";
// components
import ListingTable from "components/ListingTable/ListingTable";

interface Props extends RouteComponentProps<void>, WithStyles<typeof styles> {
    listings: Listing[];
    actions: typeof listingActions;
}

class ListingPage extends React.Component<Props> {

    componentDidMount() {
        this.props.actions.getListingAction();
    }
    nextPage = () => {
        const { listings, actions } = this.props;
        if (!listings || listings.length < 1) return;
        const latest = listings[listings.length - 1]
        actions.getListingAction(String(latest.postedTimestamp));
    }
    render() {
        const { listings, classes } = this.props;

        return (
            <Grid container className={classes.root}>
                <Grid item xs={6}>
                    <Typography variant="h4" gutterBottom>
                        Listing
                    </Typography>
                </Grid>
                <Grid item xs={6}>
                    <div className={classes.buttonContainer}>
                        <Button
                            className={classes.button}
                            variant="contained"
                            color="secondary"
                            onClick={this.nextPage}
                        >
                            Next Page
                        </Button>
                    </div>
                </Grid>
                <Grid item xs={12}>
                    <ListingTable list={listings} />
                </Grid>
            </Grid>
        );
    }
}

const styles = (theme: Theme) => createStyles({
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
});

function mapStateToProps(state: RootState) {
    return {
        listings: state.listing.list,
    };
}

function mapDispatchToProps(dispatch: any) {
    return {
        actions: bindActionCreators(listingActions as any, dispatch),
    };
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(withStyles(styles)(ListingPage));
