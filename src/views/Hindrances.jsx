import React from 'react';
import HindranceData from '../utils/hindrances';
import HindranceCard from '../components/HindranceCard';

const Hindrances = () => {
	return (
		<>
			<div className="lg:flex lg:flex-wrap lg:justify-center">
				{HindranceData.map(hindrance => (
					<HindranceCard
						key={`hindrance-item-${hindrance.id}`}
						hindrance={hindrance}
						pinnable
					/>
				))}
			</div>
		</>
	);
};

export default Hindrances;
