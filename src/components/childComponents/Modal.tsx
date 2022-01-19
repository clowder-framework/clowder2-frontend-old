// @ts-ignore
import React, {useState} from "react";
import {Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions} from "@material-ui/core";

function Modal(props) {

	const {actionTitle, actionText,  actionBtnName, handleActionBtnClick} = props;
	const [open, setOpen] = useState(false);

	return (
		<Dialog open={open} onClose={ () => { setOpen(false); }} maxWidth={"sm"}>
			<DialogTitle id="confirmation-dialog-title">{actionTitle}</DialogTitle>
				<DialogContent>
					<DialogContentText>
						{actionText}
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					{/*handleActionBtnClick This could be used to report error/ confirm deletion and so on*/}
					<Button color="primary"
						variant="contained"
						size="small"
						onClick={handleActionBtnClick}>{actionBtnName}
					</Button>
					<Button color="secondary" variant="contained" size="small" onClick={()=> {setOpen(false);}}>
						Cancel</Button>
				</DialogActions>
			</Dialog>
	);
}

export default Modal;
