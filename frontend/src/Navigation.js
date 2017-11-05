import React,{ Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

class Navigation extends Component{
	render() {
		return (
			<main>
				<Switch>
					<Route exact path="/" component={Home}/>
					<Route exact path="/about" component={About}/>
					<Route exact path="/contact" component={Contact}/>
				</Switch>
			</main>

		);
	} 
};

export default Navigation;