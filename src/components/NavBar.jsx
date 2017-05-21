import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

const NavBar = (props) => (
	<div>
	  	<AppBar
	    		title={props.title}
	    		showMenuIconButton = {false}
	    		zDepth = {0}
	    		iconClassNameRight="muidocs-icon-custom-github"
	  	/>
	  	<Tabs>
    <Tab
      icon={<FontIcon className="material-icons">home</FontIcon>}
      label="Home"
    />
    <Tab
      icon={<FontIcon className="material-icons">web</FontIcon>}
      label="Projects"
    />
    <Tab
      icon={<MapsPersonPin />}
      label="Contact"
    />
  </Tabs>
	</div>
);

export default NavBar;

