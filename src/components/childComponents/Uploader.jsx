import React, {useState} from "react";

import {Box, Button, Container} from "@material-ui/core";

import LoadingOverlay from "react-loading-overlay";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";

import {createDataset} from "../../utils/dataset";
import config from "../../app.config";

const useStyles = makeStyles();

export default function Uploader(props) {
	// const {uploaderSchema, uploaderUiSchema, ...other} = props;
	const classes = useStyles();

	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);

	// const widgets = {
	// 	TextWidget: CustomTextInput,
	// 	SelectWidget: CustomSelectWidget,
	// };
	let uploaderSchema = {
		"type": "object",
		"required": [
			"name", "description"
		],
		"properties": {
			"name": {
				"type": "string",
				"title": "Name"
			},
			"description": {
				"type": "string",
				"title": "Description"
			},
			// TODO: need to upload that file; get an id then convert that to file_id field
			"file": {
				"type": "string",
				"format": "data-url",
				"title": "Upload a file"
			},
			"space":{
				"type": "string",
				"title": "Share with space",
				"enumNames": ["Do not share", "Materials Data Facility", "Polymers", "Test", "UI testing", "temp"],
				"enum": ["", "60eda9715e0eb956fbe1944f", "60df6b2b5e0e31d558ac3f8e", "60be5f2b5e0eb9c9dc60c5bb",
					"60b7afc85e0eafbf4159b062", "606b57025e0e57a464f7b6ba"],
				"default":""
			},
		}
	};

	const onSave = async (formData) => {
		setLoading(true);
		const response = await createDataset(formData);
		if (response !== {}){
			console.log(response);
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
						<Form schema={uploaderSchema}
							  // uiSchema={uploaderUiSchema}
							  // widgets={widgets}
							  onSubmit={({formData}, e) => {onSave(formData);}}>
							<Box className="inputGroup">
								<Button variant="contained" type="submit">Create</Button>
							</Box>
						</Form>
					</LoadingOverlay>
				</Container>
			);

}
