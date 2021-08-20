import React, {useState} from "react";

import {Box, Container} from "@material-ui/core";

// import LoadingOverlay from "react-loading-overlay";
import {makeStyles} from "@material-ui/core/styles";

import Form from "@rjsf/material-ui";

const useStyles = makeStyles();

export default function DatasetHurricane(props) {
	// const {uploaderSchema, uploaderUiSchema, ...other} = props;
	const classes = useStyles();

	const [disabled, setDisabled] = useState(true);
	const [loading, setLoading] = useState(false);

	// const widgets = {
	// 	TextWidget: CustomTextInput,
	// 	SelectWidget: CustomSelectWidget,
	// };
	let uploadSchema = {

	};

	let uploaderUiSchema = {

	};

	const onSave = async (formData) => {
		// setLoading(true);
		// const hurricaneJson = await createDatasetHurricane(formData);
		// if (hurricaneJson !== {}){
		// 	handleLayerUpdate(hurricaneJson);
		// 	handleListUpdate();
		// }
		// setLoading(false);
	};

	return (
				<Container>
					<LoadingOverlay
						active={loading}
						spinner
						text="Saving..."
					>
						<Form schema={uploaderSchema}
							  uiSchema={uploaderUiSchema}
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
