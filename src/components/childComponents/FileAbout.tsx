import {Box, Typography} from "@mui/material";
import React from "react";
import {FileMetadata} from "../../types/data";


type FileAboutProps = {
	fileMetadata: FileMetadata
}

export function FileAbout(props: FileAboutProps) {
	const {fileMetadata} = props;
	return (
		<Box className="infoCard">
			<Typography className="title">About</Typography>
			<Typography
				className="content">File ID: {fileMetadata["id"]}</Typography>
			<Typography
				className="content">Type: {fileMetadata["content-type"]}</Typography>
			<Typography className="content">File
				size: {fileMetadata["size"]}</Typography>
			<Typography className="content">Uploaded
				on: {fileMetadata["date-created"]}</Typography>
			<Typography className="content">Uploaded
				as: {fileMetadata["name"]}</Typography>
			<Typography className="content">Uploaded
				by: {fileMetadata["creator"]}</Typography>
			<Typography
				className="content">Status: {fileMetadata["status"]}</Typography>
		</Box>
	);
}

