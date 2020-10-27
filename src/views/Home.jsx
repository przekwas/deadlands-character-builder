import React from 'react';
import Agility from '../features/traits/Agility';
// import Smarts from '../shared/features/traits/Smarts';
// import Spirit from '../shared/features/traits/Spirit';
// import Strength from '../shared/features/traits/Strength';
// import Vigor from '../shared/features/traits/Vigor';

const Home = () => {
	return (
		<div className="lg:flex lg:flex-wrap lg:justify-center">
			<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
				<Agility />
			</section>
			{/* <section className="lg:w-1/2 lg:p-2 xl:w-1/3">
				<Smarts />
			</section>
			<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
				<Spirit />
			</section>
			<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
				<Strength />
			</section>
			<section className="lg:w-1/2 lg:p-2 xl:w-1/3">
				<Vigor />
			</section> */}
		</div>
	);
};

export default Home;