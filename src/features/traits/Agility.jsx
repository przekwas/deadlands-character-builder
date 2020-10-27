import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { increaseAttr, decreaseAttr } from './traitsSlice';
import { spend, refund } from '../points/pointsSlice';
import { GiAcrobatic } from 'react-icons/gi';
import { errorToast } from '../../components/Toast';
import TraitCard from '../../components/TraitCard';
import TraitButtons from '../../components/TraitCard/TraitButtons';

const Agility = () => {
	const name = useSelector(state => state.traits.agility.name);
	const agilityValue = useSelector(state => state.traits.agility.value);
	const skills = useSelector(state => state.traits.agility.skills);
	const attrValue = useSelector(state => state.points.attribute.value);
	const dispatch = useDispatch();

	const handleIncrease = () => {
		if (attrValue === 0) {
			errorToast('Out of Attribute Points!');
			return;
		}
		batch(() => {
			dispatch(increaseAttr({ attr: name.toLowerCase(), value: 2 }));
			dispatch(spend({ key: 'attribute', value: 1 }));
		});
	};

	const handleDecrease = () => {
		batch(() => {
			dispatch(decreaseAttr({ attr: name.toLowerCase(), value: 2 }));
			dispatch(refund({ key: 'attribute', value: 1 }));
		});
	};

	return (
		<TraitCard
			traitName={name}
			traitValue={agilityValue}
			TraitIcon={GiAcrobatic}
			skills={skills}
		>
			<TraitButtons
				stat={agilityValue}
				handleDecrease={handleDecrease}
				handleIncrease={handleIncrease}
			/>
		</TraitCard>
	);
};

export default Agility;
