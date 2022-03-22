import React from "react";
import {Box, Button} from "@mui/material";
import metadataConfig from "../../metadata.config";

export const Metadata = () => {
	return (
		<>
			{
				metadataConfig.map((item) => {
					if (item.allowed) {
						return (
							<Box className="inputGroup">{item.widget}</Box>
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
