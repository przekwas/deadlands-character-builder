import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';
import traitsReducer from '../features/traits/traitsSlice';
import pointsReducer from '../features/points/pointsSlice';
import pinsReducer from '../features/pins/pinsSlice';
import { cramItIn, STORAGE_KEY, VERSION, VERSION_KEY } from '../utils/storage';

const reducer = combineReducers({
	traits: traitsReducer,
	points: pointsReducer,
	pins: pinsReducer
});

const storeOptions = {
	reducer
};

const localVersion = localStorage.getItem(VERSION_KEY);
let data = null;

if (Number(localVersion) === VERSION) {
	data = localStorage.getItem(STORAGE_KEY);
}

if (data) {
	storeOptions['preloadedState'] = JSON.parse(data);
}

const store = configureStore(storeOptions);

store.subscribe(() => {
	const state = store.getState();
	cramItIn(state, VERSION);
});

export default store;
