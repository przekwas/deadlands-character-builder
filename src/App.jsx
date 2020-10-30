import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import browserHistory from './utils/browserHistory';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Approach from './views/Approach';
import TraitsHome from './views/TraitsHome';
import Edges from './views/Edges';
import Hindrances from './views/Hindrances';
import Pins from './views/Pins';
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
