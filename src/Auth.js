import React , { useState, useEffect }from 'react';
import { Redirect } from 'react-router-dom';
import firebase from './Firebase';
import LoadingOverlay from 'react-loading-overlay';

const Auth = () => {

    const [signinCheck, setSigninCheck] = useState(false);
    const [signedIn, setSignedIn] = useState(false);

    useEffect(() => {
      firebase.auth().onAuthStateChanged(user => {
          if (user) {
              setSignedIn(true);
              setSigninCheck(true);
          } else {
              setSigninCheck(true);
              setSignedIn(false);
          }
      });
    });
    //チェックが終わってないなら（ローディング表示）
    if (!signinCheck) {
        return (
            <LoadingOverlay
                active={true}
                spinner
                text='Loading...'
            >
                <div style={{ height: '100vh', width: '100vw' }}></div>
            </ LoadingOverlay>
        );
    }

    if (signedIn) {
      return this.props.children;
    } else {
      return <Redirect to="/login" />
    }
}

export default Auth;
