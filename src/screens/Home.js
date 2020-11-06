import React from 'react';
import firebase from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Container from '@material-ui/core/Container';
import CustomCard from '../components/CustomCard';
import Image from 'material-ui-image'
import background from '../img/background-image.jpg';
import ff7 from '../img/ff7.jpg';
import yojohan from '../img/yojohan.png';
import pikatyu from '../img/pikatyu.jpg';

const Home = () =>  {

    const handleLogout = () => { firebase.auth().signOut(); };

    const classes = useStyles();

    return (
      <>
      <div class={classes.paperContainer}>
        <Image src={background} imageStyle={{width: '150vw', minHeight: '300vh', backgroundSize:'cover'}}/>
        <Container className={classes.container} maxWidth="xl">
          <CustomCard name={process.env.REACT_APP_NAME_TOP} message={process.env.REACT_APP_MESSEAGE_FOR_TOP} myName={process.env.REACT_APP_MY_NAME} img={ff7} keyword="「あっ、これね。気に入ってくれた？１ギルなんだけど、どう？」"/>
          <CustomCard name={process.env.REACT_APP_NAME_SIDE} message={process.env.REACT_APP_MESSEAGE_FOR_SIDE} myName={process.env.REACT_APP_MY_NAME} img={yojohan} keyword="「また阿呆なものを作りましたね。」" />
          <CustomCard name={process.env.REACT_APP_NAME_STAFF} message={process.env.REACT_APP_MESSEAGE_FOR_STAFF} myName={process.env.REACT_APP_MY_NAME} img={pikatyu} keyword="「マサラタウンにさよならバイバイ。」"/>
          <Button className={classes.button} color="secondary" fullWidth onClick={handleLogout} variant="contained">
            Log out
          </Button>
        </Container>
        </div>
      </>
    );
}

const useStyles = makeStyles((theme) => ({
  paperContainer: {
    zIndex: '1',
    position: 'relative',
  },
  container: {
    position: 'absolute',
    top: '0',
    left: '0',
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
    marginLeft: '20%',
    maxWidth: 400,
  }
}));

export default Home;
