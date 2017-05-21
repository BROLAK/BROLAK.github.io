import React, { Component } from 'react';
import Projects from './Projects';
import NavBar from './NavBar';
import Intro from './Intro'

export default class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		title: "Home"
    	};
  	};

    render() {
        return (
            <div>
                <NavBar title={this.state.title}/>
                <Intro />
                <Projects />
            </div>
        );
    }
}

