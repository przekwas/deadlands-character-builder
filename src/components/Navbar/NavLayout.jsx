import React from 'react';

const NavLayout = ({ children }) => {
	return (
		<nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3 bg-red-900 navbar-expand-lg">
			<div className="container flex flex-wrap items-center justify-between px-4 mx-auto">
				{children}
			</div>
		</nav>
	);
};

export default NavLayout;
