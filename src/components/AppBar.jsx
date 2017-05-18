import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme'

const NavBar = () => (
	<MuiThemeProvider muiTheme={theme}>
	  	<AppBar
	    		title="Portfolio"
	    		iconClassNameRight="muidocs-icon-navigation-expand-more"
	  	/>
  	</MuiThemeProvider>
);

export default NavBar;