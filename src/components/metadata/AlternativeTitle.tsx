import React, {useState} from "react";
import {TextField} from "@mui/material";
import crypto from "crypto";

export const AlternativeTitle = () => {

	const [alternativeTitle, setAlternativeTitle] = useState("");
	const id = `alternative-title-${crypto.randomBytes(7).toString('hex')}`;

	return (
		<TextField label="Alternative Title" variant="outlined" margin="normal"
				   fullWidth id={id}
				   name="Alternative Title"
				   value={alternativeTitle}
				   onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setAlternativeTitle(event.target.value);}}/>
	)
}
