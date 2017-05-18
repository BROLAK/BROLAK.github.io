import React, { Component } from 'react';
import Projects from './Projects';
import NavBar from './AppBar';
import Intro from './Intro'

export default class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		value:null,
      		place_id: null
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