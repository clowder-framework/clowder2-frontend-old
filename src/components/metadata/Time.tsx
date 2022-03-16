import React, {useState} from "react";
import {LocalizationProvider, DateTimePicker} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import {TextField} from "@mui/material";
import crypto from "crypto";

export const Time = () => {
	const [value, setValue] = useState(new Date());

	const id = `time-${crypto.randomBytes(7).toString("hex")}`;

	const handleChange = (newValue:Date) => {
		setValue(newValue);
	};

	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<DateTimePicker
				label="Date and Time"
				value={value}
				onChange={handleChange}
				renderInput={(params) => <TextField id={id} {...params} fullWidth/>}
			/>
		</LocalizationProvider>
	);
}
