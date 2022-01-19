import React from "react";
import {Button, Dialog, DialogContent, DialogTitle, DialogContentText, DialogActions} from "@material-ui/core";

// TODO define props type
function ActionModal(props:any) {

	const {actionOpen, actionTitle, actionText,  actionBtnName, handleActionBtnClick, handleActionCancel} = props;

	return (
		<Dialog open={actionOpen} onClose={handleActionCancel} maxWidth={"sm"}>
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
					<Button color="secondary" variant="contained" size="small" onClick={handleActionCancel}>
						Cancel</Button>
				</DialogActions>
			</Dialog>
	);
}

export default ActionModal;
