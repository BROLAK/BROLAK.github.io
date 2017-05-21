import React from 'react';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import MyAvatar from '../subcomponents/MyAvatar';
import Paper from 'material-ui/Paper';

const style = {
  height: '100%',
  width: '95%',
  margin: '2.5%',
  textAlign: 'center',
  display: 'inline-block',
}

const Home = () => (
  <Paper style={style} zDepth={1} >
    <MyAvatar />
    <Card >
      <CardTitle title="Mati Borlak" subtitle="Full Stack Developer"/>
      <CardText>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
      </CardText>
      <CardActions>
      </CardActions>
    </Card>
  </Paper>
);

export default Home;