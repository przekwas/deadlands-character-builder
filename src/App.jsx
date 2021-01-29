import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import Approach from './views/Approach';
import TraitsHome from './views/TraitsHome';
import Edges from './views/Edges';
import Hindrances from './views/Hindrances';
import Pins from './views/Pins';
import Perks from './views/Perks';
import Navbar from './components/Navbar';
import PointsBar from './features/points/PointsBar';

const App = () => {
	return (
		<HashRouter>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				draggable={false}
				pauseOnHover={false}
			/>
			<main className="flex flex-col">
				<Navbar />
				<PointsBar />
				<div className="overflow-y-auto">
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + '/'}>
							<Approach />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/edges'}>
							<Edges />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/hindrances'}>
							<Hindrances />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/traits'}>
							<TraitsHome />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/pins'}>
							<Pins />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/perks'}>
							<Perks />
						</Route>
						<Route path="*">
							<Approach />
						</Route>
					</Switch>
				</div>
			</main>
		</HashRouter>
	);
};

export default App;

//test