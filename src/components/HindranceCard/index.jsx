import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pinHindrance } from '../../features/pins/pinsSlice';
import { errorToast, successToast } from '../Toast';
import { GiPin } from 'react-icons/gi';

const HindranceCard = ({ hindrance, pinnable }) => {
	const dispatch = useDispatch();
	const hindrances = useSelector(state => state.pins.hindrances);

	const handlePin = hindrance => {
		const found = hindrances.find(searching => searching.id === hindrance.id);
		if (found) {
			errorToast('Hindrance already pinned!');
		} else {
			successToast('Hindrance pinned!');
			dispatch(pinHindrance(hindrance))
		}
	};

	return (
		<section key={`hindrance-item-${hindrance.id}`} className="w-full lg:w-1/2 lg:p-2 xl:w-1/3">
			<div className="mx-1 mb-6 bg-orange-200 border-2 border-red-900 rounded">
				<div className="flex items-center justify-between px-4 py-2 text-2xl text-red-200 bg-red-900">
					{hindrance.name}
					<span className="text-xs">{hindrance.kind}</span>
				</div>
				<div className="relative px-8 py-4">
					{pinnable && (
						<span
							onClick={() => handlePin(hindrance)}
							className="absolute top-0 right-0 p-1 cursor-pointer mr2">
							<GiPin className="text-xl text-green-900" />
						</span>
					)}
					<div className="text-xl">{hindrance.short}</div>
					<div className="mt-4">
						{hindrance.long
							? hindrance.long.split('\n').map((p, i) => (
									<p key={i}>
										{p}
										<br />
									</p>
							  ))
							: hindrance.long}
					</div>
				</div>
			</div>
		</section>
	);
};

export default HindranceCard;
