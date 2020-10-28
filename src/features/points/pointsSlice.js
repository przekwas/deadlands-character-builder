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
		}
	}
});

export const { spend, refund } = pointsSlice.actions;

export default pointsSlice.reducer;
