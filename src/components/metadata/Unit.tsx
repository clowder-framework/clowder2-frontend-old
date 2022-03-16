import * as React from "react";
import {InputLabel, MenuItem, Select, FormControl}  from "@mui/material";
import crypto from "crypto";

export const Unit = () => {
	const [unit, setUnit] = React.useState('');
	const id = `unit-${crypto.randomBytes(7).toString('hex')}`;
	const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setUnit(event.target.value);
	};

	return (
		<FormControl fullWidth>
			<InputLabel>Unit</InputLabel>
			<Select
				id={id}
				value={unit}
				label="Unit"
				onChange={handleChange}
			>
				<MenuItem value={"A"}>Ampere</MenuItem>
				<MenuItem value={"K"}>Kelvin</MenuItem>
				<MenuItem value={"s"}>Second</MenuItem>
			</Select>
		</FormControl>
	);
}
