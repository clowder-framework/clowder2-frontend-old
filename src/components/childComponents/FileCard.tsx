import {makeStyles} from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import DescriptionIcon from "@material-ui/icons/Description";
import React from "react";
import {File} from "../../types/data";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import CloudDownloadOutlinedIcon from "@material-ui/icons/CloudDownloadOutlined";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import {Button, Link} from "@material-ui/core";
import {fileDeleted} from "../../actions/file";
import {useDispatch} from "react-redux";
import {downloadFile} from "../../utils/file";
import {useHistory} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		padding: theme.spacing(2),
		margin: 'auto',
	},
	image: {
		width: 128,
		height: 128,
	},
	img: {
		margin: 'auto',
		display: 'block',
		maxWidth: '100%',
		maxHeight: '100%',
	},
}));

type FileCardProps = {
	file: File;
	datasetId: string;
};

export const FileCard = (props : FileCardProps) => {
	const { file, datasetId } = props;
	// css
	const classes = useStyles();
	// use history hook to redirect/navigate between routes
	const history = useHistory();
	// redux
	const dispatch = useDispatch();
	const deleteFile = (fileId:string|undefined) => dispatch(fileDeleted(fileId));
	const selectFile = (selectedFileId: string) => {
		// Redirect to file route with file Id and dataset id
		history.push(`/files/${selectedFileId}?dataset=${datasetId}`);
	};
	return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<Grid container spacing={2}>
					<Grid item>
						<ButtonBase className={classes.image}>
							<DescriptionIcon className={classes.img} style={{fontSize: "5em"}}/>
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
		</div>
	);
}
