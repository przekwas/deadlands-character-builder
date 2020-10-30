import React from 'react';
import EdgeData from '../utils/edges';
import EdgeCard from '../components/EdgeCard';

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
			<form className="px-4 py-2 mx-1 mb-2 bg-orange-200 border-2 border-red-900 rounded md:flex md:justify-around lg:mx-3">
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							value="Agility"
							checked={filter === 'Agility'}
							onChange={sorter}
							className="text-red-900 form-checkbox"
						/>
						<span className="ml-2 text-sm">Agility</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							value="Smarts"
							checked={filter === 'Smarts'}
							onChange={sorter}
							className="text-red-900 form-checkbox"
						/>
						<span className="ml-2 text-sm">Smarts</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							value="Spirit"
							checked={filter === 'Spirit'}
							onChange={sorter}
							className="text-red-900 form-checkbox"
						/>
						<span className="ml-2 text-sm">Spirit</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							value="Strength"
							checked={filter === 'Strength'}
							onChange={sorter}
							className="text-red-900 form-checkbox"
						/>
						<span className="ml-2 text-sm">Strength</span>
					</label>
				</div>
				<div>
					<label className="inline-flex items-center">
						<input
							type="checkbox"
							value="Vigor"
							checked={filter === 'Vigor'}
							onChange={sorter}
							className="text-red-900 form-checkbox"
						/>
						<span className="ml-2 text-sm">Vigor</span>
					</label>
				</div>
			</form>
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
