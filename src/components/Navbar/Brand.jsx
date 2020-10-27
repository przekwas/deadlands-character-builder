import React from 'react';
import { GiSawedOffShotgun } from 'react-icons/gi';

const Brand = () => {
	return (
		<div className="flex items-center">
			<GiSawedOffShotgun className="w-6 h-6 mr-2 text-red-200" />
			<span className="inline-block py-2 mr-4 text-sm font-bold leading-relaxed text-red-200 uppercase whitespace-no-wrap">
				Character Builder
			</span>
		</div>
	);
};

export default Brand;