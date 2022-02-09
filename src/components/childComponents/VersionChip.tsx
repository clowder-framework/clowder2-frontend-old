import {Chip} from "@mui/material";

type VersionChipProps = {
	versionNumber: string,
	handleClick: any
}

export function VersionChip(props: VersionChipProps) {
	const {versionNumber, handleClick} = props;

	return (
		<Chip label={`V${versionNumber}`} onClick={handleClick}/>
	);
}
