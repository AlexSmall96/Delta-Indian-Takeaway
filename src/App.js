import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom/cjs/react-router-dom.min';
import Menu from './pages/Menu';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import About from './pages/About';
import Location from './pages/Location';
import Footer from './components/Footer';

function App() {
	return (
		<div>
			<Router>
				<NavBar />
				<Switch>
					<Route exact path='/' render={() => <HomePage />} />
					<Route exact path='/menu' render={() => <Menu />} />
					<Route exact path='/about' render={() => <About />} />
					<Route exact path='/location' render={() => <Location />} />
				</Switch>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
