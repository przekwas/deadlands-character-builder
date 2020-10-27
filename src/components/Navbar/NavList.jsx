import React from 'react';

const NavList = ({ children, show }) => {
	return (
		<div className={'lg:flex flex-grow items-center' + (show ? ' flex' : ' hidden')}>
			<ul className="flex flex-col list-none lg:flex-row lg:ml-auto">{children}</ul>
		</div>
	);
};

export default NavList;