import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { increaseSkill, decreaseSkill } from '../../features/traits/traitsSlice';
import { spend, refund } from '../../features/points/pointsSlice';
import { errorToast } from '../../components/Toast';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const capitalize = s => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const Skills = ({ skills, traitValue, traitName }) => {
	const skillTotal = useSelector(state => state.points.skill);
	const dispatch = useDispatch();

	const handleIncrease = (skill, skillValue) => {
		if (skillTotal.value === 0) {
			errorToast('Out of Skill Points!');
			return;
		}

		if (skillValue === 0) {
			batch(() => {
				dispatch(increaseSkill({ attr: traitName.toLowerCase(), skill, value: 4 }));
				dispatch(spend({ key: 'skill', value: 1 }));
			});
			return;
		}

		if (skillValue >= traitValue) {
			if (skillTotal.value === 1) {
				errorToast('Not Enough Skill Points!');
				return;
			}

			batch(() => {
				dispatch(increaseSkill({ attr: traitName.toLowerCase(), skill, value: 2 }));
				dispatch(spend({ key: 'skill', value: 2 }));
			});
		} else {
			//possible catch?

			batch(() => {
				dispatch(increaseSkill({ attr: traitName.toLowerCase(), skill, value: 2 }));
				dispatch(spend({ key: 'skill', value: 1 }));
			});
		}
	};

	const handleDecrease = (skill, skillValue) => {
		if (skillValue === 4) {
			batch(() => {
				dispatch(decreaseSkill({ attr: traitName.toLowerCase(), skill, value: 4 }));
				dispatch(refund({ key: 'skill', value: 1 }));
			});
			return;
		}

		if (skillValue > traitValue) {
			batch(() => {
				dispatch(decreaseSkill({ attr: traitName.toLowerCase(), skill, value: 2 }));
				dispatch(refund({ key: 'skill', value: 2 }));
			});
		} else {
			batch(() => {
				dispatch(decreaseSkill({ attr: traitName.toLowerCase(), skill, value: 2 }));
				dispatch(refund({ key: 'skill', value: 1 }));
			});
		}
	};

	return (
		<>
			<div className="w-3/4 my-2 border border-red-900 rounded-full" />
			{skills && (
				<div className="flex flex-col w-full p-4">
					{Object.keys(skills).map(skill => (
						<div key={`skill-name-${skill}`}>
							<h3 className="flex items-center justify-between py-2 -mr-4 text-sm font-hairline">
								<div className="flex justify-between">
									<span className={`${skills[skill] ? 'font-bold' : null}`}>
										{capitalize(skill)}
									</span>
									<span className="ml-2 font-bold">
										{skills[skill] ? `d${skills[skill]}` : null}
									</span>
								</div>
								<div>
									<button
										className={`${
											skills[skill] === 0 ? 'invisible' : 'text-green-900'
										} mx-2 `}>
										<FaMinusSquare
											onClick={() => handleDecrease(skill, skills[skill])}
											className="text-2xl"
										/>
									</button>

									<button
										className={`${
											skills[skill] === 12 ? 'invisible' : 'text-green-900'
										} mx-2`}>
										<FaPlusSquare
											onClick={() => handleIncrease(skill, skills[skill])}
											className="text-2xl"
										/>
									</button>
								</div>
							</h3>
						</div>
					))}
				</div>
			)}
			{!skills && <span className="py-2 text-sm font-hairline">No Skills</span>}
		</>
	);
};

export default Skills;
