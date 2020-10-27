import React from 'react';

import NavLayout from './NavLayout';
import CollapseNav from './CollapseNav';
import Brand from './Brand';
import Hamburger from './Hamburger';
import NavList from './NavList';
import NavItem from './NavItem';

const Navbar = () => {
    const [show, setShow] = React.useState(false);
    
	return (
		<>
			<NavLayout>
				<CollapseNav>
					<Brand />
					<Hamburger toggle={() => setShow(!show)} />
				</CollapseNav>
				<NavList show={show}>
					<NavItem to={process.env.PUBLIC_URL + '/traits'} text="Traits" />
					<NavItem to={process.env.PUBLIC_URL + '/'} text="Edges" />
				</NavList>
			</NavLayout>
		</>
	);
};

export default Navbar;
