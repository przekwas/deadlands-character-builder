import React from 'react';
import Skills from './Skills';

const TraitCard = ({ traitName, traitValue, TraitIcon, children, skills }) => {
	return (
		<>
			<div className="flex flex-col items-center justify-center mx-1 mb-4 bg-orange-200 border-2 border-red-900 rounded sm:container sm:mx-auto">
				<h1 className="flex items-center justify-between w-full px-4 py-2 text-2xl text-red-200 bg-red-900">
					{traitName} <TraitIcon />
				</h1>
				<div className="flex items-center justify-between w-full px-8 py-4 text-xl">
					<h2 className="mx-3 font-extrabold text-orange-900 ">d{traitValue}</h2>
					<div className="flex items-center">{children}</div>
				</div>
				{skills && (
					<small className="text-xs">*Refunding an Attribute Resets Skills</small>
				)}
				<Skills skills={skills} traitValue={traitValue} traitName={traitName} />
			</div>
		</>
	);
};

export default TraitCard;
