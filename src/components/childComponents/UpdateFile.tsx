import React, {useState} from "react";

import {Box, Button, Container} from "@mui/material";

import LoadingOverlay from "react-loading-overlay-ts";

import Form from "@rjsf/material-ui";

import fileSchema from "../../schema/fileSchema.json";
import {FormProps} from "@rjsf/core";
import {useDispatch} from "react-redux";
import {fileUpdated} from "../../actions/file";


type UpdateFileProps ={
	fileId: string|undefined,
	setOpen:(open:boolean) => void,
}

export const UpdateFile: React.FC<UpdateFileProps> = (props: UpdateFileProps) => {
	const dispatch = useDispatch();
	const updateFile = (fileId: string|undefined, formData: FormData,) => dispatch(fileUpdated(fileId, formData));

	const {fileId, setOpen,} = props;

	const [loading, setLoading] = useState<boolean>(false);

	const onSave = async (formData:FormData) => {
		setLoading(true);
		updateFile(fileId, formData);
		setLoading(false);
		setOpen(false);
	};

	// TODO
	// @ts-ignore
	return (
		<Container>
			<LoadingOverlay
				active={loading}
				spinner
				text="Saving..."
			>
				<Form schema={fileSchema["schema"] as FormProps<any>["schema"]}
					  uiSchema={fileSchema["uiSchema"] as FormProps<any>["uiSchema"]}
					  onSubmit={({formData}) => {onSave(formData);}}>
					<Box className="inputGroup">
						<Button variant="contained" type="submit" className="form-button-block">Update</Button>
					</Box>
				</Form>
			</LoadingOverlay>
		</Container>
	);

};
