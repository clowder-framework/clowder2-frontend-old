import React from "react";
import {Box, Typography, List, ListItem, ListItemAvatar, ListItemText, IconButton, Avatar} from "@mui/material";
import {FileVersion} from "../../types/data";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import {VersionChip} from "./VersionChip";
import {parseDate} from "../../utils/common";

type FileVersionHistoryProps = {
	fileVersions: FileVersion[]
}

export function FileVersionHistory(props: FileVersionHistoryProps) {
	const {fileVersions} = props;

	return (
		<Box className="infoCard">
			<Typography className="title">Version History</Typography>
			{
				// sort by date decending
				fileVersions.map((fileVersion) => {
					return (

						<List dense={true}>
							<ListItem
								secondaryAction={
									// TODO add actions later
									<IconButton edge="end" aria-label="delete">
										<MoreHorizIcon />
									</IconButton>
								}
							>
								<ListItemAvatar>
									{/*TODO replace with pretty version name*/}
									<VersionChip versionNumber={fileVersion["version_id"].slice(0,2)}/>
								</ListItemAvatar>
								<ListItemText primary={`Uploaded by ${fileVersion["creator"]}`}
									secondary={`Uploaded on ${parseDate(fileVersion["created"])}`}
								/>
							</ListItem>
						</List>
					);
				})
			}
		</Box>
	);
}
