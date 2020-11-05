import React from 'react';
import firebase from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomCard from '../components/CustomCard';

const Home = () =>  {

    const handleLogout = () => { firebase.auth().signOut(); };

    const classes = useStyles();

    return (
      <Container className={classes.container} maxWidth="xl">
        <CustomCard name="john" message="this is a post description." />
        <CustomCard name="mark" message="is this your name???" />
        <CustomCard name="staff" message="are you serius???" />
        <Button className={classes.button} color="secondary" fullWidth onClick={handleLogout} variant="contained">
          Log out
        </Button>
      </Container>
    );
}

const useStyles = makeStyles((theme) => ({
  container: {
    padding: theme.spacing(3),
  },
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    maxWidth: 30,
  }
}));

export default Home;
