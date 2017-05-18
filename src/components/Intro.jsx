import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import theme from './theme';

const Intro = () => (
	<MuiThemeProvider muiTheme={theme}>
  <Card>
    <CardHeader
      avatar="../img/me.jpg"
    />
    <CardTitle title="Matthew Borlak" subtitle="Full Stack Developer" avatar="../img/me.jpg" />
    <CardText>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
      Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
      Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
    </CardText>
    <CardActions>
    </CardActions>
  </Card>
  </MuiThemeProvider>
);

export default Intro;