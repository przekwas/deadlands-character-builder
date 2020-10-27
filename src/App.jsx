import React from 'react';
import { Router, Switch, Route } from 'react-router';
import browserHistory from './utils/browserHistory';
import { ToastContainer } from 'react-toastify';

import Navbar from './components/Navbar';
import Home from './views/Home';
import Edges from './views/Edges';
import PointsBar from './features/points/PointsBar';

const App = () => {
	return (
		<Router history={browserHistory}>
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
						<Route exact path={process.env.PUBLIC_URL + '/traits'}>
							<Home />
						</Route>
						<Route exact path={process.env.PUBLIC_URL + '/'}>
							<Edges />
						</Route>
					</Switch>
				</div>
				<PointsBar />
			</main>
		</Router>
	);
};

export default App;