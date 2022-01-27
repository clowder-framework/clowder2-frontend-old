import {V2} from "../openapi";
import {LOGOUT, logoutHelper} from "./user";

export const FAILED = "FAILED";

export const RECEIVE_FILES_IN_DATASET = "RECEIVE_FILES_IN_DATASET";
function receiveFilesInDataset(type, json, reason="") {
	return (dispatch) => {
		dispatch({
			type: type,
			files: json,
			reason: reason,
			receivedAt: Date.now(),
		});
	};
}
export function fetchFilesInDataset(id){
	return (dispatch) => {
		return V2.DatasetsService.getDatasetFilesApiV2DatasetsDatasetIdFilesGet(id)
			.then(json => {
				dispatch(receiveFilesInDataset(RECEIVE_FILES_IN_DATASET, json));
			})
			.catch(reason => {
				if (reason.status === 401){
					logoutHelper();
					dispatch(receiveFilesInDataset(LOGOUT, []));
				}
				else{
					dispatch(receiveFilesInDataset(FAILED, [], `Cannot list files in dataset! ${reason}`));
				}
			})	;
	};
}

export const RECEIVE_DATASET_ABOUT = "RECEIVE_DATASET_ABOUT";
function receiveDatasetAbout(type, json, reason="") {
	return (dispatch) => {
		dispatch({
			type: type,
			about: json,
			reason: reason,
			receivedAt: Date.now(),
		});
	};
}
export function fetchDatasetAbout(id){
	return (dispatch) => {
		return V2.DatasetsService.getDatasetApiV2DatasetsDatasetIdGet(id)
			.then(json => {
				dispatch(receiveDatasetAbout(RECEIVE_DATASET_ABOUT, json));
			})
			.catch(reason => {
				if (reason.status === 401) {
					logoutHelper();
					dispatch(receiveDatasetAbout(LOGOUT, []));
				}
				else{
					dispatch(receiveDatasetAbout(FAILED, [], `Cannot fetch Dataset! ${reason}`));
				}
			});
	};
}

export const RECEIVE_DATASETS = "RECEIVE_DATASETS";
function receiveDatasets(type, json, reason="") {
	return (dispatch) => {
		dispatch({
			type: type,
			datasets: json,
			reason: reason,
			receivedAt: Date.now(),
		});
	};
}
export function fetchDatasets(when, date, limit=5){
	return (dispatch) => {
		// TODO: Parameters for dates? paging?
		return V2.DatasetsService.getDatasetsApiV2DatasetsGet(0, limit)
			.then(json => {
				dispatch(receiveDatasets(RECEIVE_DATASETS, json));
			})
			.catch(reason => {
				// Authorization error we need to automatically logout user
				if (reason.status === 401){
					logoutHelper();
					dispatch({
						type: LOGOUT,
						receivedAt: Date.now()
					});
				}
				else{
					dispatch({
						type: FAILED,
						reason: `Cannot fetch dataset! ${reason}`,
						receivedAt: Date.now()
					});
				}
			});

	};
}

export const CREATE_DATASET = "CREATE_DATASET";
function createDataset(type, json, reason="") {
	return (dispatch) => {
		dispatch({
			type: type,
			dataset: json,
			reason: reason,
			receivedAt: Date.now(),
		});
	};
}
export function datasetCreated(formData){
	return (dispatch) =>{
		return V2.DatasetsService.saveDatasetApiV2DatasetsPost(formData)
			.then(dataset => {
				dispatch(createDataset(CREATE_DATASET, dataset));
			})
			.catch(reason => {
				if (reason.status === 401) {
					logoutHelper();
					dispatch(createDataset(LOGOUT, {}));
				}
				else{
					dispatch(createDataset(FAILED, {}, `Cannot create dataset! ${reason}`));
				}
			});
	};
}

export const DELETE_DATASET = "DELETE_DATASET";
function deleteDataset(type, json, reason="") {
	return (dispatch) => {
		dispatch({
			type: type,
			dataset: json,
			reason: reason,
			receivedAt: Date.now(),
		});
	};
}
export function datasetDeleted(datasetId){
	return (dispatch) => {
		return V2.DatasetsService.deleteDatasetApiV2DatasetsDatasetIdDelete(datasetId)
			.then(json => {
				dispatch(deleteDataset(DELETE_DATASET, {"id": datasetId}));
			})
			.catch(reason => {
				if (reason.status === 401){
					logoutHelper();
					dispatch(deleteDataset(LOGOUT, {}));
				}
				else{
					dispatch(deleteDataset(FAILED, {"id": null}, `Cannot delete dataset! ${reason}`));
				}
			});
	};
}
