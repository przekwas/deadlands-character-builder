import React from 'react';
import EdgeData from '../utils/edges';
import EdgeCard from '../components/EdgeCard';
import EdgeFilter from '../components/EdgeFilter';

const data = EdgeData.filter(edge => edge.tier === 'Novice');

const Edges = () => {
	const [filter, setFilter] = React.useState(null);

	const sorter = e => {
		if (e.target.value === filter) {
			setFilter(null);
			return;
		}
		setFilter(e.target.value);
	};

	return (
		<>
			<EdgeFilter filter={filter} sorter={sorter} />
			<div className="lg:flex lg:flex-wrap lg:justify-center">
				{data
					.filter(edge => {
						if (!filter) {
							return true;
						} else if (
							edge.requirements === null ||
							edge.requirements.includes(filter)
						) {
							return true;
						} else {
							return false;
						}
					})
					.map(edge => (
						<EdgeCard key={`edge-item-${edge.id}`} edge={edge} pinnable />
					))}
			</div>
		</>
	);
};

export default Edges;
