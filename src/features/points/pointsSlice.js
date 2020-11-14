import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	attribute: {
		name: 'Attributes',
		value: 5,
		max: 5
	},
	skill: {
		name: 'Skills',
		value: 14,
		max: 14
	},
	edge: {
		name: 'Edges',
		value: 1,
		max: 1
	},
	wealth: {
		name: 'Wealth',
		value: 500,
		max: 500
	},
	load: {
		name: 'Load',
		value: 0,
		max: 500
	},
	perks: {
		name: 'Perks',
		value: 4,
		max: 4
	}
};

const pointsSlice = createSlice({
	name: 'points',
	initialState,
	reducers: {
		spend: (state, action) => {
			state[action.payload.key].value -= action.payload.value;
		},
		refund: (state, action) => {
			state[action.payload.key].value += action.payload.value;
		},
		perked: (state, action) => {
			state[action.payload.key].value += action.payload.value;
			state[action.payload.key].max += action.payload.value;
			state.perks.value -= action.payload.cost;
		},
		unperked: (state, action) => {
			state[action.payload.key].value -= action.payload.value;
			state[action.payload.key].max -= action.payload.value;
			state.perks.value += action.payload.cost;
		},
		reset: state => initialState
	}
});

export const { spend, refund, perked, unperked, reset } = pointsSlice.actions;

export default pointsSlice.reducer;