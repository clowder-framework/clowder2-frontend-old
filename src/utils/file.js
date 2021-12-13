import {getHeader, dataURItoFile} from "./common";
import config from "../app.config";
import {V2} from "../openapi";

// TODO this need to go away in v2; same function already in redux
// TODO this exist because on dataset page we need to call multiple files id to collect their thumbnail

export async function fetchFileMetadata(id){
	const url = `${config.hostname}/files/${id}/metadata?superAdmin=true`;
	const response = await fetch(url, {mode:"cors", headers: getHeader()});
	if (response.status  === 200){
		return await response.json();
	} else if (response.status === 401) {
		// TODO handle error
		return {};
	} else {
		// TODO handle error
		return {};
	}
}

export async function uploadFile(formData, selectedDatasetId) {

	const formDataBody = new FormData();
	formData.map((item) =>{
		if (item["file"] !== undefined){
			formDataBody.append("file", dataURItoFile(item["file"]));
		}
	});

	return V2.FilesService.saveFileApiV2FilesDatasetIdPost(selectedDatasetId, formDataBody).catch(reason => {
		if (reason.status === 401) {
			console.error("Failed to create file: Not authenticated: ", reason);
			return {};
		} else {
			console.error("Failed to create file: ", reason);
			return {};
		}
	}).then(file => {
		return file;
	});
}

export async function downloadFile(fileId, filename = "") {

	if (filename === "") {
		filename = `${fileId}.zip`;
	}
	const endpoint = `${config.hostname}/files/${fileId}/blob?superAdmin=true`;
	const response = await fetch(endpoint, {method: "GET", mode: "cors", headers: await getHeader()});

	if (response.status === 200) {
		const blob = await response.blob();
		if (window.navigator.msSaveOrOpenBlob) {
			window.navigator.msSaveBlob(blob, filename);
		} else {
			const anchor = window.document.createElement("a");
			anchor.href = window.URL.createObjectURL(blob);
			anchor.download = filename;
			document.body.appendChild(anchor);
			anchor.click();
			document.body.removeChild(anchor);
		}
	} else if (response.status === 401) {
		// TODO
		console.log(response.json());
	} else {
		console.log(response.json());
	}

}
