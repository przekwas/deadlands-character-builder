import React from 'react';

const CollapseNav = ({ children }) => {
	return (
		<div className="relative flex justify-between w-full lg:w-auto lg:static lg:block lg:justify-start">
			{children}
		</div>
	);
};

export default CollapseNav;