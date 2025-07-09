import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Menu from './pages/Menu';
import HomePage from './pages/HomePage';
import NavBar from './components/NavBar';
import About from './pages/About';
import Location from './pages/Location';
import Footer from './components/Footer';
import styles from './App.module.css'
import { AnimatePresence } from 'framer-motion';
import { useLocation } from 'react-router-dom';

function App() {

	const location = useLocation();

	return (
		<div className={styles.App}>
			<NavBar /> 
			<AnimatePresence mode="wait">
				<Switch location={location} key={location.pathname}>
				<Route exact path='/' render={() => <HomePage />} />
				<Route exact path='/menu' render={() => <Menu />} />
				<Route exact path='/about' render={() => <About />} />
				<Route exact path='/location' render={() => <Location />} />
				</Switch>
			</AnimatePresence>
			<Footer />
		</div>
	);
}

export default App;
