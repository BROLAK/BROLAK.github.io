import React, { Component } from 'react';
import NavBar from './NavBar';

export default class App extends Component {
	constructor(props) {
    	super(props);
    	this.state = {
      		title: "Portfolio",
            slideIndex: 0
    	}
        this.handleSlide = this.handleSlide.bind(this);
  	}

    handleSlide(value) {
    this.setState({
        slideIndex: value,
        });
    };

    render() {
        return (
            <div>
                <NavBar 
                title={this.state.title} 
                slideIndex={this.state.slideIndex}
                handleSlide={this.handleSlide}
                />
            </div>
        );
    }
}

