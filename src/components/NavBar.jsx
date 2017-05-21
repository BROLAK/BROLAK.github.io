import React from 'react';
import AppBar from 'material-ui/AppBar';
import ActionHome from 'material-ui/svg-icons/action/home';
import {Tabs, Tab} from 'material-ui/Tabs';
import FontIcon from 'material-ui/FontIcon';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import Intro from './Intro';
import Projects from './Projects';
import SwipeableViews from 'react-swipeable-views';

const NavBar = (props) => (
	<div>
	  	<AppBar
	    		title={props.title}
	    		showMenuIconButton = {false}
	    		zDepth = {0}
	    		iconClassNameRight="muidocs-icon-custom-github"
	  	/>
	  	<Tabs
	  		onChange={props.handleSlide}
    		value={props.slideIndex}
	  	>
	  		<Tab
				icon={<FontIcon className="material-icons">home</FontIcon>}
      			label="Home"
      			value={0}
    		>
    		</Tab>
    		<Tab
      			icon={<FontIcon className="material-icons">web</FontIcon>}
      			label="Projects"
      			value={1}
    		>
    		</Tab>
    		<Tab
      			icon={<FontIcon className="material-icons">person</FontIcon>}
      			label="Contact"
      			value={2}
    		>
    		</Tab>
    	</Tabs>
	  	<SwipeableViews
	  		index={props.slideIndex}
	  		onChangeIndex={props.handleSlide}
	  	>
	    	<div>
	    		<Intro />
	    	</div>
	    	<div>
	    		<Projects />
	    	</div>
	    	<div>
	    		Contact info
	    	</div>
    	</SwipeableViews>
	</div>
);

export default NavBar;

