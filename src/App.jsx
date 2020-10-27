import React from 'react';
import { HashRouter, Switch, Route, Redirect } from 'react-router-dom';
import browserHistory from './utils/browserHistory';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Edges from './views/Edges';
import Hindrances from './views/Hindrances';
import PointsBar from './features/points/PointsBar';

const App = () => {
	return (
		<HashRouter>
			<ToastContainer
				position="bottom-right"
				autoClose={3000}
				draggable={false}
				pauseOnHover={false}
				toastClassName="border-l-4 border-red-900 bg-red-500 text-red-100"
				progressStyle={{ background: '#c53030' }}
			/>
			<main className="flex flex-col h-screen">
				<Navbar />
				<div className="flex-1 overflow-y-auto">
					<Switch>
						<Route exact path={process.env.PUBLIC_URL + '/'}>
							<h1 className="mt-10 text-2xl text-center text-red-900">
								Use the Navbar lol idk
							</h1>
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/edges'}>
							<Edges />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/hindrances'}>
							<Hindrances />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/traits'}>
							<Home />
						</Route>
						<Route path={'*'}>
							<h1 className="mt-10 text-2xl text-center text-red-900">
								Use the Navbar lol idk
							</h1>
						</Route>
					</Switch>
				</div>
				<PointsBar />
			</main>
		</HashRouter>
	);
};

export default App;
