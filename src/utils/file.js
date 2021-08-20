import {getHeader, dataURItoFile} from "./common";
import config from "../app.config";


export async function fetchFileMetadata(id){
	let url = `${config.hostname}/clowder/api/files/${id}/metadata?superAdmin=true`;
	let response = await fetch(url, {mode:"cors", headers: getHeader()});
	if (response.status  === 200){
		return await response.json();
	}
	else if  (response.status  === 401){
		// TODO handle error
		return {};
	}
	else {
		// TODO handle error
		return {};
	}
}

export async function uploadFile(){
	let endpoint = `${config.hostname}/clowder/api/files?superAdmin=true`;
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
		return response.json();
	} else if (response.status === 401) {
		// TODO handle error
		return {};
	} else {
		// TODO handle error
		return {};
	}
}

export async function attachFile(payload, dataurl){
	// need to convert data uri to blob then append
	payload.append("file", dataURItoFile(dataurl["dataurl"], dataurl["filename"]));
}
