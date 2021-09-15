import {getHeader} from "./common";
import config from "../app.config";

export async function postMetadata(resourceType="datasets", id, formData) {
	let endpoint = `${config.hostname}/clowder/api/${resourceType}/${id}/metadata`;

	let authHeader = getHeader();
	authHeader.append('Accept', 'application/json');
	authHeader.append('Content-Type', 'application/json');

	let body = JSON.stringify(formData);

	let response = await fetch(endpoint, {
		method: "POST",
		mode: "cors",
		headers: authHeader,
		body: body,
	});

	if (response.status === 200) {
		return response.json();
	} else if (response.status === 401) {
		// TODO handle error
		return {};
	} else {
		// TODO handle error
		return {};
	}
}


export async function deleteMetadata(resourceType, id, extractorId="https://clowder.ncsa.illinois.edu/clowder/extractors/siegfried/2.0") {
	let endpoint = `${config.hostname}/clowder/api/${resourceType}/${id}/metadata.jsonld?superAdmin=true&extractor=${extractorId}`;
	let response = await fetch(endpoint, {
		method: "DELETE",
		mode: "cors",
		headers: getHeader(),
	});

	return response.status;
}
