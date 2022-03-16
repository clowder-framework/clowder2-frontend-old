import React, {useState} from "react";
import {LocalizationProvider, DateTimePicker} from "@mui/lab";
import DateAdapter from "@mui/lab/AdapterDateFns";
import {TextField} from "@mui/material";

export const Time = () => {
	const [value, setValue] = useState(new Date());

	const handleChange = (newValue:Date) => {
		setValue(newValue);
	};

	return (
		<LocalizationProvider dateAdapter={DateAdapter}>
			<DateTimePicker
				label="Date and Time"
				value={value}
				onChange={handleChange}
				renderInput={(params) => <TextField {...params} />}
			/>
		</LocalizationProvider>
	);
}
