import React from "react";
import {File} from "../../types/data";

import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {Button, Link} from "@material-ui/core";
import {fileDeleted} from "../../actions/file";
import {useDispatch} from "react-redux";
import {downloadFile} from "../../utils/file";
import {useNavigate} from "react-router-dom";
import { Box, Grid, Paper, Typography, ButtonBase } from '@mui/material';
import DescriptionIcon from '@mui/icons-material/Description';

type FileCardProps = {
	file: File;
	datasetId: string;
};

export const FileCard = (props : FileCardProps) => {
	const { file, datasetId } = props;
	// use history hook to redirect/navigate between routes
	const history = useNavigate();
	// redux
	const dispatch = useDispatch();
	const deleteFile = (fileId:string|undefined) => dispatch(fileDeleted(fileId));
	const selectFile = (selectedFileId: string) => {
		// Redirect to file route with file Id and dataset id
		history(`/files/${selectedFileId}?dataset=${datasetId}`);
	};
	return (
		<Box sx={{flexGrow: 1}}>
			<Paper sx={{
				p: 2,
				margin: 'auto',
			}}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase sx={{
							width: 128,
							height: 128,
						}}>
							<DescriptionIcon/>
						</ButtonBase>
					</Grid>
					<Grid item xs={12} sm container>
						<Grid item xs container direction="column" spacing={2}>
							<Grid item xs>
								<Typography gutterBottom variant="subtitle1">
									File name: <Link onClick={() => selectFile(file["id"])}>{file.name}</Link>
								</Typography>
								<Typography variant="body2" gutterBottom>
									File size: {file.size == undefined? "0 B" : file.size}
								</Typography>
								<Typography variant="body2" color="textSecondary">
									Content type: {file.contentType == undefined? "N/A" : file.contentType}
								</Typography>
							</Grid>
						</Grid>
						<Grid item>
							<Grid item xs container direction="column" spacing={2}>
								<Grid item xs>
									<Button startIcon={<DeleteOutlineIcon />}
											onClick={()=>{deleteFile(file.id);}}>Delete</Button>
								</Grid>
								<Grid item xs>
									<Button startIcon={<CloudDownloadOutlinedIcon />}
											onClick={()=>{downloadFile(file.id, file.name);}}>
										Download</Button>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
			</Paper>
		</Box>
	);
}
