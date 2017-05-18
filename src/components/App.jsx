import React, { Component } from 'react';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Material from './Material';
import GridListExampleSimple from './Projects';

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
                <h1>Stuff</h1>
                <MuiThemeProvider>
                	<Material />
                </MuiThemeProvider>
                <MuiThemeProvider>
                    <GridListExampleSimple />
                </MuiThemeProvider>
            </div>
        );
    }
}