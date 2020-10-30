import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    edges: [],
    hindrances: []
};

const pinsSlice = createSlice({
	name: 'pins',
	initialState,
	reducers: {
		pinEdge: (state, action) => {
            state.edges.push(action.payload);
        },
        pinHindrance: (state, action) => {
            state.hindrances.push(action.payload);
        },
		reset: state => initialState
	}
});

export const { pinEdge, pinHindrance, reset } = pinsSlice.actions;

export default pinsSlice.reducer;