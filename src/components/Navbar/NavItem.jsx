import React from 'react';
import { NavLink } from 'react-router-dom';

const NavItem = ({ to, text }) => {
	return (
		<li className="nav-item">
			<NavLink
				className="flex items-center px-3 py-2 text-xs font-bold leading-snug text-red-200 uppercase hover:opacity-75"
				to={to}>
				<span className="ml-2">{text}</span>
			</NavLink>
		</li>
	);
};

export default NavItem;