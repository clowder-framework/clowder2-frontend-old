import React from "react";
import {Box, Button} from "@mui/material";
import metadataConfig from "../../metadata.config";


export const Metadata = (props) => {
	// const {metadataDefinition} = props;
	const metadataDefinition =
		[{
			"widget_id": "",
			"widget_name": "alternative_title",
			"key": ""
		},
		{
			"widget_id": "",
			"widget_name": "doi",
			"key": "",
		},
		{
			"widget_id": "",
			"widget_name": "time",
			"key": "",
		},
		{
			"widget_id": "",
			"widget_name": "unit",
			"key": "",
		}];

	return (
		<>
			{
				metadataDefinition.map((item) => {
					if (item.widget_name in metadataConfig) {
						return (
							<Box className="inputGroup">{metadataConfig[item.widget_name]}</Box>
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
