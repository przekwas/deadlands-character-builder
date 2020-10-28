import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	agility: {
		name: 'Agility',
		value: 4,
		skills: {
			athletics: 0,
			boating: 0,
			driving: 0,
			fighting: 0,
			piloting: 0,
			riding: 0,
			shooting: 0,
			stealth: 0,
			thievery: 0
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
			state[action.payload.attr].skills[action.payload.skill] += action.payload.value;
		},
		decreaseSkill: (state, action) => {
			state[action.payload.attr].skills[action.payload.skill] -= action.payload.value;
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
