import {getHeader} from "./common";
import config from "../app.config";

export async function createDataset(formData) {
	let endpoint = `${config.hostname}/clowder/api/datasets/createempty`;
	let authHeader = getHeader();
	authHeader.append('Accept', 'application/json');
	authHeader.append('Content-Type', 'application/json');

	// upload attached file (data-url); then get the id
	// use that id as "file_id" field

	let response = await fetch(endpoint, {
		method: "POST",
		mode: "cors",
		headers: authHeader,
		body: JSON.stringify(formData),
	});

	if (response.status === 200) {
		// {id:xxx}
		return response.json();
	} else if (response.status === 401) {
		// TODO handle error
		return {};
	} else {
		// TODO handle error
		return {};
	}
}
