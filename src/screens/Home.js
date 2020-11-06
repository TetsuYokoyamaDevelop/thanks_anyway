import React, { useState } from 'react';
import firebase from '../Firebase';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import CustomCard from '../components/CustomCard';
import Image from 'material-ui-image'
import sakura from '../img/pink.jpg';
import ff7 from '../img/ff7.jpg';
import yojohan from '../img/yojohan.png';
import pikatyu from '../img/pikatyu.jpg';
import falcon from '../img/falcon.png';

const Home = () =>  {

    const handleLogout = () => { firebase.auth().signOut(); };

    const [count, setCount] = useState(0);

    const classes = useStyles();

    return (
      <>
      <div class={classes.paperContainer}>
        <Image src={sakura} imageStyle={{width: '100vw', minHeight: '300vh', backgroundSize:'cover'}}/>
        <Container className={classes.container} maxWidth="xl">

          <Container maxWidth="sm">
            <Card className={classes.root}>
              <CardContent>
                <Typography variant="h5" component="h2">
                  好きな順番でお読みください。
                </Typography>
              </CardContent>
            </Card>
          </Container>

          <CustomCard func={setCount}
            funcNum={count}
            name={process.env.REACT_APP_NAME_TOP}
            message={process.env.REACT_APP_MESSEAGE_FOR_TOP}
            myName={process.env.REACT_APP_MY_NAME}
            img={ff7}
            num="1"
            keyword="「あっ、これね。気に入ってくれた？１ギルなんだけど、どう？」"/>
          <CustomCard func={setCount}
            funcNum={count}
            name={process.env.REACT_APP_NAME_SIDE}
            message={process.env.REACT_APP_MESSEAGE_FOR_SIDE}
            myName={process.env.REACT_APP_MY_NAME}
            img={yojohan}
            num="2"
            keyword="「また阿呆なものを作りましたね。」" />
          <CustomCard func={setCount}
            funcNum={count}
            name={process.env.REACT_APP_NAME_STAFF}
            message={process.env.REACT_APP_MESSEAGE_FOR_STAFF}
            myName={process.env.REACT_APP_MY_NAME}
            img={pikatyu}
            num="3"
            keyword="「マサラタウンにさよならバイバイ。」"/>
            {count >= 3 ?
             <CustomCard name={process.env.REACT_APP_NAME_SYSTEM}
              message={process.env.REACT_APP_MESSEAGE_FOR_SYSTEM}
              myName={process.env.REACT_APP_MY_NAME}
              img={falcon}
              num="4"
              keyword="「彼はあたしたちが想像もできないことをパソコン一つでやってのける力を持ってる」"/> : null
            }
          <Container maxWidth="sm">
            <Button className={classes.button} fullWidth onClick={handleLogout} variant="contained">
              Log out
            </Button>
          </Container>


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
    color: 'white',
    backgroundColor: 'rgb(66, 24, 208)',
    maxWidth: 600,
  }
}));

export default Home;
