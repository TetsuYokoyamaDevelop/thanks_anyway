import React from 'react';
import firebase from '../Firebase';
import { Button } from 'reactstrap';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';

const Home = () =>  {

    const handleLogout = () => {
        firebase.auth().signOut();
    }

    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Card>
              <p>thanks for watabe</p>
            </Card>
            <Button onClick={handleLogout}>ログアウト</Button>
        </div>
    );
}

const useStyles = makeStyles({
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
});

export default Home;
