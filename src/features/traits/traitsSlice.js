import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	agility: {
		name: 'Agility',
		value: 4,
		skills: {
			athletics: {
				current: 0,
				spent: []
			},
			boating: {
				current: 0,
				spent: []
			},
			driving: {
				current: 0,
				spent: []
			},
			fighting: {
				current: 0,
				spent: []
			},
			piloting: {
				current: 0,
				spent: []
			},
			riding: {
				current: 0,
				spent: []
			},
			shooting: {
				current: 0,
				spent: []
			},
			stealth: {
				current: 0,
				spent: []
			},
			thievery: {
				current: 0,
				spent: []
			}
		}
	},
	smarts: {
		name: 'Smarts',
		value: 4,
		skills: {
			academics: 0,
			battle: 0,
			knowledge: 0,
			electronics: 0,
			gambling: 0,
			hacking: 0,
			healing: 0,
			notice: 0,
			occult: 0,
			spellcasting: 0,
			taunt: 0,
			survival: 0
		}
	},
	spirit: {
		name: 'Spirit',
		value: 4,
		skills: {
			faith: 0,
			focus: 0,
			intimidation: 0,
			performance: 0,
			persuasion: 0
		}
	},
	strength: {
		name: 'Strength',
		value: 4
	},
	vigor: {
		name: 'Vigor',
		value: 4
	}
};

const traitsSlice = createSlice({
	name: 'traits',
	initialState,
	reducers: {
		increaseAttr: (state, action) => {
			state[action.payload.attr].value += action.payload.value;
		},
		decreaseAttr: (state, action) => {
			state[action.payload.attr].value -= action.payload.value;
		},
		increaseSkill: (state, action) => {
			state[action.payload.attr].skills[action.payload.skill].current += action.payload.value;
			state[action.payload.attr].skills[action.payload.skill].spent.push(action.payload.cost);
		},
		decreaseSkill: (state, action) => {
			state[action.payload.attr].skills[action.payload.skill].current -= action.payload.value;
			state[action.payload.attr].skills[action.payload.skill].spent.pop();
		},
		reset: state => initialState
	}
});

export const {
	increaseAttr,
	decreaseAttr,
	increaseSkill,
	decreaseSkill,
	reset
} = traitsSlice.actions;

export default traitsSlice.reducer;
