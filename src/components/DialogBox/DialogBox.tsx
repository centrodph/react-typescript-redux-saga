// prettier-ignore
import { Button, Dialog, DialogActions, DialogTitle, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import * as React from "react";

interface Props {
	open: boolean;
	onClose: () => void;
}

function DialogBox(props: Props) {
	const { open, onClose } = props;
	const classes = useStyles();

	const handleClose = () => {
		onClose();
	};

	return (
		<Dialog open={open} onClose={handleClose}>
			<DialogTitle>Title</DialogTitle>
			<DialogActions>
				<Button color="primary" onClick={handleClose}>
					Close
				</Button>
			</DialogActions>
		</Dialog>
	);
}

const useStyles = makeStyles({
	textField: {
		width: "80%",
		margin: 20,
	},
});

export default DialogBox;
