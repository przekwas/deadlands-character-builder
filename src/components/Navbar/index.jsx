import React from 'react';
import { useDispatch, batch } from 'react-redux';
import { reset as resetPoints } from '../../features/points/pointsSlice';
import { reset as resetTraits } from '../../features/traits/traitsSlice';
import { reset as resetPins } from '../../features/pins/pinsSlice';
import NavLayout from './NavLayout';
import CollapseNav from './CollapseNav';
import Brand from './Brand';
import Hamburger from './Hamburger';
import NavList from './NavList';
import NavItem from './NavItem';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { VERSION } from '../../utils/storage';

const Modal = withReactContent(Swal);

const Navbar = () => {
	const dispatch = useDispatch();
	const [show, setShow] = React.useState(false);

	const handleModal = () => {
		Modal.fire({
			showCancelButton: true,
			confirmButtonText: `Reset`,
			icon: 'error',
			title: <p className="text-red-200">Reset All the Things?</p>,
			footer: "Don't fuck it up.",
			customClass: {
				popup: 'bg-red-900',
				footer: 'text-red-200',
				confirmButton: 'bg-red-500 text-red-100',
				cancelButton: 'bg-orange-100 text-orange-500'
			}
		}).then(result => {
			if (result.isConfirmed) {
				localStorage.clear();
				batch(() => {
					dispatch(resetPoints());
					dispatch(resetTraits());
					dispatch(resetPins());
				});
				return Modal.fire({
					icon: 'success',
					title: <p className="text-red-200">Everything Reset!</p>,
					customClass: {
						popup: 'bg-red-900',
						footer: 'text-red-200',
						confirmButton: 'bg-red-500 text-red-100',
						cancelButton: 'bg-orange-100 text-orange-500'
					}
				});
			}
		});
	};

	return (
		<>
			<NavLayout>
	<small className="absolute top-0 left-0 text-indigo-500">v{VERSION}</small>
				<CollapseNav>
					<Brand />
					<Hamburger toggle={() => setShow(!show)} />
				</CollapseNav>
				<NavList show={show}>
					<NavItem to={process.env.PUBLIC_URL + '/'} text="Approach" />
					<NavItem to={process.env.PUBLIC_URL + '/hindrances'} text="Hindrances" />
					<NavItem to={process.env.PUBLIC_URL + '/edges'} text="Edges" />
					<NavItem to={process.env.PUBLIC_URL + '/traits'} text="Traits" />
					<NavItem to={process.env.PUBLIC_URL + '/pins'} text="Pins" />
					<NavItem to={process.env.PUBLIC_URL + '/perks'} text="Perks" />
					<li onClick={handleModal} className="nav-item">
						<span className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-red-200 uppercase cursor-pointer hover:opacity-75">
							<span className="ml-2">Reset All</span>
						</span>
					</li>
				</NavList>
			</NavLayout>
		</>
	);
};

export default Navbar;