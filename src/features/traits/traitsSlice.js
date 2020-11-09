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
			academics: {
				current: 0,
				spent: []
			},
			battle: {
				current: 0,
				spent: []
			},
			knowledge: {
				current: 0,
				spent: []
			},
			electronics: {
				current: 0,
				spent: []
			},
			gambling: {
				current: 0,
				spent: []
			},
			hacking: {
				current: 0,
				spent: []
			},
			healing: {
				current: 0,
				spent: []
			},
			notice: {
				current: 0,
				spent: []
			},
			occult: {
				current: 0,
				spent: []
			},
			spellcasting: {
				current: 0,
				spent: []
			},
			taunt: {
				current: 0,
				spent: []
			},
			survival: {
				current: 0,
				spent: []
			}
		}
	},
	spirit: {
		name: 'Spirit',
		value: 4,
		skills: {
			faith: {
				current: 0,
				spent: []
			},
			focus: {
				current: 0,
				spent: []
			},
			intimidation: {
				current: 0,
				spent: []
			},
			performance: {
				current: 0,
				spent: []
			},
			persuasion: {
				current: 0,
				spent: []
			}
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
		resetSkills: (state, action) => {
			state[action.payload.attr].skills = initialState[action.payload.attr].skills;
		},
		reset: state => initialState
	}
});

export const {
	increaseAttr,
	decreaseAttr,
	increaseSkill,
	decreaseSkill,
	resetSkills,
	reset
} = traitsSlice.actions;

export default traitsSlice.reducer;
export const skillsList = initialState;
