import React from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';

const Hamburger = ({ toggle }) => {
	return (
		<button
			className="block px-3 py-1 text-xl leading-none text-red-200 bg-transparent border border-transparent border-solid rounded outline-none cursor-pointer lg:hidden focus:outline-none"
			type="button"
			onClick={toggle}>
			<GiHamburgerMenu className="w-8 h-8" />
		</button>
	);
};

export default Hamburger;