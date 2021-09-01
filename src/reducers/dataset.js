import {RECEIVE_FILES_IN_DATASET, RECEIVE_DATASET_ABOUT, RECEIVE_DATASETS, DELETE_DATASET} from "../actions/dataset";

const defaultState = {files: [], about: {}, datasets: [], status: ""};

const dataset = (state=defaultState, action) => {
	switch(action.type) {
		case RECEIVE_FILES_IN_DATASET:
			return Object.assign({}, state, {files: action.files});
		case RECEIVE_DATASET_ABOUT:
			return Object.assign({}, state, {about: action.about});
		case RECEIVE_DATASETS:
			return Object.assign({}, state, {datasets:action.datasets});
		case DELETE_DATASET:
			return Object.assign({}, state, {
				datasets: state.datasets.filter(dataset => dataset.id !== action.dataset.id),
				status: action.dataset.status
			})
		default:
			return state;
	}
};

export default dataset;
