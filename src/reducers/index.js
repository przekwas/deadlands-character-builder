import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import traitsReducer from '../features/traits/traitsSlice';
import pointsReducer from '../features/points/pointsSlice';

import { cramItIn, STORAGE_KEY } from '../utils/storage';

const reducer = combineReducers({
	traits: traitsReducer,
	points: pointsReducer
});

const storeOptions = {
	reducer
}

// const data = localStorage.getItem(STORAGE_KEY) || null;
// if (data) {
// 	storeOptions['preloadedState'] = JSON.parse(data)
// }

const store = configureStore(storeOptions);

store.subscribe(() => {
	const state = store.getState();
	cramItIn(state);
});

export default store;