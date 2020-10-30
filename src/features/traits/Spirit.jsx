import React from 'react';
import { useSelector, useDispatch, batch } from 'react-redux';
import { increaseAttr, decreaseAttr, resetSkills} from './traitsSlice';
import { spend, refund } from '../points/pointsSlice';
import { GiMagicPalm } from 'react-icons/gi';
import { errorToast } from '../../components/Toast';
import TraitCard from '../../components/TraitCard';
import TraitButtons from '../../components/TraitCard/TraitButtons';

const Spirit = () => {
	const name = useSelector(state => state.traits.spirit.name);
	const spiritValue = useSelector(state => state.traits.spirit.value);
	const skills = useSelector(state => state.traits.spirit.skills);
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
			dispatch(resetSkills({ attr: name.toLowerCase() }));
			dispatch(decreaseAttr({ attr: name.toLowerCase(), value: 2 }));
			dispatch(refund({ key: 'attribute', value: 1 }));
		});
	};

	return (
		<TraitCard
			traitName={name}
			traitValue={spiritValue}
			TraitIcon={GiMagicPalm}
			skills={skills}>
			<TraitButtons
				stat={spiritValue}
				handleDecrease={handleDecrease}
				handleIncrease={handleIncrease}
			/>
		</TraitCard>
	);
};

export default Spirit;
