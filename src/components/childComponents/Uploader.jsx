import React, {useState} from "react";

import {Box, Button, Container} from "@material-ui/core";

import LoadingOverlay from "react-loading-overlay";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";

import {createDataset} from "../../utils/dataset";

const useStyles = makeStyles();

export default function Uploader(props) {
	const {uploaderSchema, uploaderUiSchema, widgets, select, ...other} = props;
	const classes = useStyles();

	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);


	const onSave = async (formData) => {
		setLoading(true);
		const response = await createDataset(formData);
		if (response !== {}) select(response["id"]);
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
