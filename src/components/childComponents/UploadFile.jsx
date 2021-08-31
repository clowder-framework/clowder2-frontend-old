import React, {useState} from "react";

import {Box, Button, Container} from "@material-ui/core";

import LoadingOverlay from "react-loading-overlay";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";

import {uploadFile} from "../../utils/file.js";
import fileSchema from "../../schema/fileSchema.json";

const useStyles = makeStyles();

export default function UploadFile(props) {
	const {selectedDatasetId, selectDataset, ...other} = props;
	const classes = useStyles();

	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);


	const onSave = async (formData) => {
		setLoading(true);
		const response = await uploadFile(formData, selectedDatasetId);
		if (response !== {} && response["ids"] !== undefined){
			selectDataset(selectedDatasetId);
		}
		setLoading(false);
	};

	return (
		<Container>
			<LoadingOverlay
				active={loading}
				spinner
				text="Saving..."
			>
				<Form schema={fileSchema}
					  onSubmit={({formData}, e) => {onSave(formData);}}>
					<Box className="inputGroup">
						<Button variant="contained" type="submit">Upload</Button>
					</Box>
				</Form>
			</LoadingOverlay>
		</Container>
	);

}
