// prettier-ignore
import { Checkbox, IconButton, Paper, Table, TableBody, TableCell, TableHead, TableRow } from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
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
			<Table className={classes.table}>
				<TableHead>
					<TableRow>
						<TableCell padding="normal">Completed</TableCell>
						<TableCell padding="normal">Text</TableCell>
						<TableCell padding="normal">Delete</TableCell>
					</TableRow>
				</TableHead>
				<TableBody>
					{list.map(n => {
						return (
							<TableRow
								key={n.id}
								hover
								onClick={event => onRowClick(n)}
							>
								<TableCell padding="none">
									a
								</TableCell>
								<TableCell padding="none"> test</TableCell>
								<TableCell padding="none">
									a
								</TableCell>
							</TableRow>
						);
					})}
				</TableBody>
			</Table>
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
});

export default ListingTable;
