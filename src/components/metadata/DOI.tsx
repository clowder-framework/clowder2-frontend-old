import React, {useEffect, useState} from "react";
import {TextField} from "@mui/material";
import crypto from "crypto";

export const DOI = () => {

	const [DOI, setDOI] = useState("");
	const [promptError, setPromptError] = useState(false);
	const DOIErrorText = "DOI must follow the format of doi:0000000/000000000000!";

	const id = `DOI-${crypto.randomBytes(7).toString('hex')}`;

	useEffect(() => {
		// If DOI doesn't follow the format (Regex)
		if (!/doi:[0-9]{7}\/[0-9]{12}/.test(DOI)){
			setPromptError(true);
		}
		else{
			setPromptError(false);
		}
	}, [DOI]);
	return (
		<TextField label="DOI" variant="outlined" margin="normal"
				   fullWidth id={id}
				   name="DOI"
				   value={DOI}
				   onChange={(event: React.ChangeEvent<HTMLInputElement>) => { setDOI(event.target.value);}}
				   error={promptError}
				   helperText={DOIErrorText}
		/>
	)
}
