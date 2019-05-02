import * as React from "react";
import { Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
// redux
import { Listing } from "model/model";

interface Props {
    list: Listing[];
}

function ListingTable(props: Props) {
    const { list } = props;
    const classes = useStyles();

    const onRowClick = (listing: Listing) => {
        console.log(listing)
    };

    return (
        <Paper className={classes.paper}>
            <div className={classes.tableWrapper}>
                <Table className={classes.table}>
                    <TableHead>
                        <TableRow>
                            <TableCell >postId</TableCell>
                            <TableCell >title</TableCell>
                            <TableCell >contentSnippet</TableCell>
                            <TableCell >link</TableCell>
                            <TableCell >viewed</TableCell>
                            <TableCell >emailed</TableCell>
                            <TableCell >postedTimestamp</TableCell>
                            <TableCell >createdTimestamp</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {list.map(listing => {
                            return (
                                <TableRow
                                    key={listing.postId}
                                    hover
                                    onClick={event => onRowClick(listing)}
                                >
                                    <TableCell padding="none">
                                        {listing.postId}
                                    </TableCell>
                                    <TableCell padding="none"> {listing.title}</TableCell>
                                    <TableCell padding="none">
                                        {listing.contentSnippet}
                                    </TableCell>
                                    <TableCell >{listing.link}</TableCell>
                                    <TableCell >{listing.viewed}</TableCell>
                                    <TableCell >{listing.emailed}</TableCell>
                                    <TableCell >{listing.postedTimestamp}</TableCell>
                                    <TableCell >{listing.createdTimestamp}</TableCell>
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </div>
        </Paper>
    );
}

const useStyles = makeStyles({
    paper: {
        width: "100%",
        minWidth: 260,
        display: "inline-block",
    },
    table: {
        width: "100%",
    },
    tableWrapper: {
        overflow: 'auto',
        maxHeight: '80%'
    },
});

export default ListingTable;
