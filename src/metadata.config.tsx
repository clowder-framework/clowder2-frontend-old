import React from "react";
import {AlternativeTitle} from "./components/metadata/AlternativeTitle";
import {DOI} from "./components/metadata/DOI";
import {Time} from "./components/metadata/Time";
import {Unit} from "./components/metadata/Unit";

const configMetadata = [
	{
		"widget_id": "",
		"widget_name": "alternative_title",
		"allowed": true,
		"key": "",
		"widget": <AlternativeTitle/>
	},
	{
		"widget_id": "",
		"widget_name": "doi",
		"allowed": false,
		"key": "",
		"widget": <DOI/>
	},
	{
		"widget_id": "",
		"widget_name": "time",
		"allowed": true,
		"key": "",
		"widget": <Time/>
	},
	{
		"widget_id": "",
		"widget_name": "unit",
		"allowed": true,
		"key": "",
		"widget": <Unit/>
	},
];

export default configMetadata
