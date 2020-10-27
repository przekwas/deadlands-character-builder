import React from 'react';
import { useDispatch } from 'react-redux';
import { increaseSkill, decreaseSkill } from '../../features/traits/traitsSlice';
import { FaMinusSquare, FaPlusSquare } from 'react-icons/fa';

const capitalize = s => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const Skills = ({ skills, traitValue, traitName }) => {
	const dispatch = useDispatch();
	const handleIncrease = (skill, skillValue) => {
		if (skillValue >= traitValue) {
			dispatch(increaseSkill({ attr: traitName.toLowerCase(), skill, value: 2 }));
		} else {
			dispatch(increaseSkill({ attr: traitName.toLowerCase(), skill, value: 1 }));
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
											skills[skill] === 4 ? 'invisible' : 'text-green-900'
										} mx-2 `}>
										<FaMinusSquare className="text-2xl" />
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
