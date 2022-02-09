import React from "react";
import {Chip} from "@mui/material";


type VersionChipProps = {
	versionNumber: number,
}

export function VersionChip(props: VersionChipProps) {

	const { versionNumber } = props;

	return (
		versionNumber > 1 ?
			<Chip label={`V${versionNumber}`}/> : <></>
			// TODO can make this a clickable item
			// <Chip label={`V${versionNumber}`} component="a" href="/" clickable/> : <></>

	);
}
