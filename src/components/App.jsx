import React, { Component } from 'react';
import Projects from './Projects';
import NavBar from './AppBar';
import Intro from './Intro'

export default class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		value:null
    	};
  	};

    render() {
        return (
            <div>
                <NavBar />
                <Intro />
                <Projects />
            </div>
        );
    }
}