import React from "react";
import {Time} from "./Time";
import {AlternativeTitle} from "./AlternativeTitle";
import {Unit} from "./Unit";
import {DOI} from "./DOI";
import {Box, Button} from "@mui/material";

export const Metadata = () => {
	return (
		<>
			<Box className="inputGroup">
				<Time/>
			</Box>
			<Box className="inputGroup">
				<AlternativeTitle/>
			</Box>
			<Box className="inputGroup">
				<Unit/>
			</Box>
			<Box className="inputGroup">
				<DOI/>
			</Box>
			<Box className="inputGroup">
				<Button variant="contained" type="submit" className="form-button-block">Create Metadata</Button>
			</Box>
		</>
	)
}
