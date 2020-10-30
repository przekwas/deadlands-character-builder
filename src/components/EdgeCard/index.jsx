import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { pinEdge } from '../../features/pins/pinsSlice';
import { errorToast, successToast } from '../Toast';
import { GiPin } from 'react-icons/gi';

const EdgeCard = ({ edge, pinnable }) => {
	const dispatch = useDispatch();
	const edges = useSelector(state => state.pins.edges);

	const handlePin = edge => {
		const found = edges.find(searching => searching.id === edge.id);
		if (found) {
			errorToast('Edge already pinned!');
			return;
		} else {
			successToast('Edge pinned!');
			dispatch(pinEdge(edge));
		}
	};

	return (
		<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
			<div className="relative mx-1 mb-6 bg-orange-200 border-2 border-red-900 rounded">
				<div className="flex items-center justify-between px-4 py-2 text-2xl text-red-200 bg-red-900">
					{edge.name}
					<span className="text-xs">{edge.tier}</span>
				</div>
				{pinnable && (
					<span
						onClick={() => handlePin(edge)}
						className="absolute right-0 p-2 cursor-pointer mr2">
						<GiPin className="text-xl text-green-900" />
					</span>
				)}
				<div className="px-8 py-4">
					{edge.requirements && (
						<div className="text-xs font-hairline text-red-700">Requirements</div>
					)}
					<div className="font-extrabold text-orange-900">{edge.requirements}</div>
					<div className={`${edge.requirements && 'mt-4'} text-xl`}>{edge.summary}</div>
				</div>
			</div>
		</section>
	);
};

export default EdgeCard;
