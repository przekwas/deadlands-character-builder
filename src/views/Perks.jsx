import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { perked } from '../features/points/pointsSlice';
import { errorToast } from '../components/Toast';

const Perks = () => {
	const dispatch = useDispatch();
	const perks = useSelector(state => state.points.perks);

	const handleAddBonus = (key, value, cost) => {
		if (perks.value === 0) {
			errorToast('Out of Perk Points!');
			return;
		}
		dispatch(perked({ key, value, cost }));
	};

	return (
		<div>
			<h1>Perks</h1>
			<div>
				<div className="flex items-center justify-between">
					<span>
						Add Attribue Point <small>(2 perks)</small>
					</span>
					<div>
						<button
							className={`${!perks.value && 'invisible'}`}
							onClick={() => handleAddBonus('attribute', 1, 2)}>
							+
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span>
						Add an Edge <small>(2 perks)</small>
					</span>
					<div>
						<button
							className={`${!perks.value && 'invisible'}`}
							onClick={() => handleAddBonus('edge', 1, 2)}>
							+
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span>
						Add a Skill <small>(1 perk)</small>
					</span>
					<div>
						<button
							className={`${!perks.value && 'invisible'}`}
							onClick={() => handleAddBonus('skill', 1, 1)}>
							+
						</button>
					</div>
				</div>
				<div className="flex items-center justify-between">
					<span>
						Double Starting Wealth<small>(1 perk)</small>
					</span>
					<div>
						<button
							className={`${!perks.value && 'invisible'}`}
							onClick={() => handleAddBonus('wealth', 1000, 1)}>
							+
						</button>
					</div>
				</div>
			</div>
			<div className="w-3/4 my-2 border border-red-900 rounded-full" />
			<div>
				Here
			</div>
		</div>
	);
};

export default Perks;
