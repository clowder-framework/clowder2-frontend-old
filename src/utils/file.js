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

export async function uploadFile(formData, selectedDatasetId) {
	let endpoint = `${config.hostname}/clowder/api/datasets/${selectedDatasetId}/files`;
	let authHeader = getHeader();
	let body = new FormData();
	formData.map((item) =>{
		if (item["file"] !== undefined){
			body.append("file", dataURItoFile(item["file"]));
		}
	});

	let response = await fetch(endpoint, {
		method: "POST",
		mode: "cors",
		headers: authHeader,
		body: body,
	});

	if (response.status === 200) {
		// {id:xxx}
		// {ids:[{id:xxx}, {id:xxx}]}
		return response.json();
	} else if (response.status === 401) {
		// TODO handle error
		return {};
	} else {
		// TODO handle error
		return {};
	}
}
