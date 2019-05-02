// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import TablePagination from '@material-ui/core/TablePagination';
import { makeStyles } from "@material-ui/styles";
import * as React from "react";
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
                            <TableCell padding="normal">postId</TableCell>
                            <TableCell padding="normal">title</TableCell>
                            <TableCell padding="normal">contentSnippet</TableCell>
                            <TableCell padding="normal">link</TableCell>
                            <TableCell padding="normal">viewed</TableCell>
                            <TableCell padding="normal">emailed</TableCell>
                            <TableCell padding="normal">postedTimestamp</TableCell>
                            <TableCell padding="normal">createdTimestamp</TableCell>
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
                                    <TableCell padding="normal">{listing.link}</TableCell>
                                    <TableCell padding="normal">{listing.viewed}</TableCell>
                                    <TableCell padding="normal">{listing.emailed}</TableCell>
                                    <TableCell padding="normal">{listing.postedTimestamp}</TableCell>
                                    <TableCell padding="normal">{listing.createdTimestamp}</TableCell>
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
