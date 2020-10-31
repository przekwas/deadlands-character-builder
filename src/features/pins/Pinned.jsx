import React from 'react';
import { useSelector } from 'react-redux';
import EdgeCard from '../../components/EdgeCard';
import HindranceCard from '../../components/HindranceCard';

const Pinned = () => {
	const pins = useSelector(state => state.pins);

	return (
		<>
			{!pins.edges.length && !pins.hindrances.length ? (
				<h1 className="w-1/2 mx-auto mb-4 text-xl text-center border-b-2 border-red-900">
					Nothing Pinned
				</h1>
			) : (
				<>
					<h1 className="w-1/2 mx-auto mb-4 text-xl text-center border-b-2 border-red-900">
						{pins.edges.length ? 'Edges' : 'No Edges'}
					</h1>
					<div className="flex flex-wrap items-center justify-center">
						{pins.edges.map(edge => (
							<EdgeCard key={`pinned-edge-item-${edge.id}`} edge={edge} />
						))}
					</div>
					<h1 className="w-1/2 mx-auto my-4 text-xl text-center border-b-2 border-red-900">
						{pins.hindrances.length ? 'Hindrances' : 'No Hindrances'}
					</h1>
					<div className="flex flex-wrap items-center justify-center">
						{pins.hindrances.map(hindrance => (
							<HindranceCard
								key={`pinned-hindrance-item-${hindrance.id}`}
								hindrance={hindrance}
							/>
						))}
					</div>
				</>
			)}
		</>
	);
};

export default Pinned;
