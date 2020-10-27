import React from 'react';
import HindranceData from '../utils/hindrances';

const Hindrances = () => {
	return (
		<>
			<div className="lg:flex lg:flex-wrap lg:justify-center">
				{HindranceData.map(hindrance => (
					<section
						key={`hindrance-item-${hindrance.id}`}
						className="lg:w-1/2 lg:p-2 xl:w-1/3">
						<div className="mx-1 mb-6 bg-orange-200 border-2 border-red-900 rounded">
							<div className="flex items-center justify-between px-4 py-2 text-2xl text-red-200 bg-red-900">
								{hindrance.name}
								<span className="text-xs">{hindrance.kind}</span>
							</div>
							<div className="px-8 py-4">
								<div className="text-xl">
									{hindrance.short}
								</div>
								<div className="mt-4">
									{hindrance.long}
								</div>
							</div>
						</div>
					</section>
				))}
			</div>
		</>
	);
};

export default Hindrances;
