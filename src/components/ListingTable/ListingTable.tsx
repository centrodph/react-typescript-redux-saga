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
                            <TableCell >#</TableCell>
                            <TableCell >Title</TableCell>
                            <TableCell >Description</TableCell>
                            <TableCell >Link</TableCell>
                            <TableCell >Viewed</TableCell>
                            <TableCell >Emailed</TableCell>
                            <TableCell >Posted</TableCell>
                            <TableCell >Created</TableCell>
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
                                    <TableCell >{listing.link ? <a href={listing.link} target="_blank">Link</a> : ''}</TableCell>
                                    <TableCell >{listing.viewed}</TableCell>
                                    <TableCell >{listing.emailed}</TableCell>
                                    <TableCell >{new Date(listing.postedTimestamp).toLocaleDateString("en-US")}</TableCell>
                                    <TableCell >{new Date(listing.createdTimestamp).toLocaleDateString("en-US")}</TableCell>
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
