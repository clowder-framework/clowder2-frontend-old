import React from "react";
import {Box, Button, Typography} from "@mui/material";
import metadataConfig from "../../metadata.config";


export const Metadata = (props) => {
	// const {metadataDefinition} = props;
	const metadataDefinition =
		[
		{
			"widget_id": "time",
			"widget_name": "start time",
			"key": "",
		},
		{
			"widget_id": "time",
			"widget_name": "end time",
			"key": "",
		},
		];

	return (
		<>
			{
				metadataDefinition.map((item) => {
					if (item.widget_id in metadataConfig) {
						return (
							<Box className="inputGroup">
								<Typography>{item.widget_name}</Typography>
								{metadataConfig[item.widget_id]}</Box>
						);
					}
				})
			}
			<Box className="inputGroup">
				<Button variant="contained" type="submit" className="form-button-block">Create Metadata</Button>
			</Box>
		</>
	)
}
