import React from "react";
import {Box, Typography} from "@mui/material";
import {FileVersion} from "../../types/data";

type FileVersionHistoryProps = {
	fileVersions: FileVersion[]
}

export function FileVersionHistory(props: FileVersionHistoryProps) {
	const {fileVersions} = props;

	return (
		<Box className="infoCard">
			<Typography className="title">Version History</Typography>
			{
				fileVersions.map((fileVersion) => {
					return (
						<Box>
							<Typography className="content">Version_id: {fileVersion["version_id"]}</Typography>
							<Typography className="content">Creator: {fileVersion["creator"]}</Typography>
							<Typography className="content">Created on: {fileVersion["created"]}</Typography>
						</Box>
					);
				})
			}
		</Box>
	);
}
