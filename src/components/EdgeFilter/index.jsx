import React from 'react';

const EdgeFilter = ({ filter, sorter }) => {
	return (
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
	);
};

export default EdgeFilter;
