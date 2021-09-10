import React, {useState} from "react";

import {Box, Button, Container} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";
import metadataSchema from "../../schema/metadata.json";
import {postMetadata} from "../../utils/metadata";

const useStyles = makeStyles();

export default function CreateMetadata(props) {
	const {resourceType, resourceId, listMetadataJsonld, ...other} = props;
	const classes = useStyles();

	const onSave = async (formData) => {
		const response = await postMetadata(resourceType, resourceId, formData)
		if (response !== {}){
			listMetadataJsonld(resourceId);
		}
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
