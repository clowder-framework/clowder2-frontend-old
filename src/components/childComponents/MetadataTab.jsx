import React, {useState} from "react";

import {Box, Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";
import metadataSchema from "../../schema/metadata.json";
// import {MetadataTab} from "../../utils/dataset";

const useStyles = makeStyles();

export default function MetadataTab(props) {
	const {...other} = props;
	const classes = useStyles();

	const [disabled, setDisabled] = useState(true);

	const onSave = async (formData) => {
		// const response = await MetadataTab(formData);
		// if (response !== {} && response["id"] !== undefined){
		// 	selectDataset(response["id"]);
		// }
	};

	return (
		<Container>
			<Form schema={metadataSchema["schema"]} uiSchema={metadataSchema["uiSchema"]} // widgets={widgets}
				  onSubmit={({formData}, e) => {onSave(formData);}}>
				<Box className="inputGroup">
					<Button variant="contained" type="submit" className="form-button-block">Create</Button>
				</Box>
			</Form>
		</Container>
	);
}
