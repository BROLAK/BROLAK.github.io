import React from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';
import App from './components/App';
import './styles/app.scss';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

ReactDOM.render(
	<MuiThemeProvider muiTheme={theme}>
   		<App />
   	</MuiThemeProvider>
   ,
   document.getElementById('root')
);