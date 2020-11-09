import React from 'react';
import EdgeData from '../utils/edges';
import EdgeCard from '../components/EdgeCard';
import EdgeFilter from '../components/EdgeFilter';
import { skillsList } from '../features/traits/traitsSlice';

const data = EdgeData.filter(edge => edge.tier === 'Novice');

const capitalize = s => {
	if (typeof s !== 'string') return '';
	return s.charAt(0).toUpperCase() + s.slice(1);
};

const allSkills = [];
for (const [key, attribute] of Object.entries(skillsList)) {
	let skills = [];
	for (const skill in attribute.skills) {
		skills.push(capitalize(skill))
	}
	allSkills.push({ attribute: attribute.name, skills: skills });
}

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
			<EdgeFilter filter={filter} sorter={sorter} allSkills={allSkills} />
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
