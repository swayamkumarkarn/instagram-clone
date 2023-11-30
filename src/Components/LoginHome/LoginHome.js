import React, { useState } from 'react';
import './LoginHome.css';
import { Grid, Paper, Avatar } from '@mui/material';
// import { Avatar } from '@material-ui/core';
import { firebase } from '../../firebase';

const LoginHome = () => {
  const [signIN, setSignIN] = useState(true);
  const [signinEmail, setSigninEmail] = useState(null);
  const [signinPassword, setSigninPassword] = useState(null);
  const [signupName, setSignupName] = useState(null);
  const [signupEmail, setSignupEmail] = useState(null);
  const [signupPassword, setSignupPassword] = useState(null);

  const switchPanel = () => {
    setSignIN(!signIN);
  };

  const getImage = () => {
    return 'dp' + Math.floor(Math.random() * 10);
  };

  const signUP = () => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(signupEmail, signupPassword)
      .then((userCredential) => {
        var user = userCredential.user;

        let payload = {
          userID: user.uid,
          userName: signupName,
          userImage: getImage(),
        };

        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        };

        fetch('http://localhost:8080/api/userService/save', requestOptions)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  const signInMethod = () => {
    firebase
      .auth()
      .signInWithEmailAndPassword(signinEmail, signinPassword)
      .then((userCredential) => {
        var user = userCredential.user;
        fetch('http://localhost:8080/api/getAllUsers/' + user.uid)
          .then((response) => response.json())
          .then((data) => {
            localStorage.setItem('user', JSON.stringify(data));
            window.location.reload();
          })
          .catch((error) => {});
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
      });
  };

  return (
    <div className="main__container">
      <Grid className="main__content" container>
        <Grid item xs={7}>
          <div className="fblogo">
            <img
              src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
              width="300px"
            />
          </div>
          <div>
            <h1 className="text">
              Facebook helps you connect and share with the people in your life.
            </h1>
          </div>
        </Grid>
        <Grid item xs={3}>
          <Paper className="logincard__container">
            {signIN === true ? (
              <div container="login__panel">
                <div>
                  <input
                    onChange={(event) => {
                      setSigninEmail(event.currentTarget.value);
                    }}
                    type="text"
                    className="login__input"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    onChange={(event) => {
                      setSigninPassword(event.currentTarget.value);
                    }}
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button onClick={signInMethod} className="login__button">
                    Log in
                  </button>
                </div>
                <div>
                  <div className="forget_Text">Forgotten password?</div>
                </div>
                <div>
                  <div className="dividor"></div>
                </div>
                <div>
                  <button
                    className="login__createnew"
                    onClick={switchPanel}
                  >
                    Create New Account
                  </button>
                </div>
              </div>
            ) : (
              <div container="login__panel">
                <div>
                  <input
                    onChange={(event) => {
                      setSignupName(event.currentTarget.value);
                    }}
                    type="text"
                    className="login__input"
                    placeholder="Name"
                  />
                </div>
                <div>
                  <input
                    onChange={(event) => {
                      setSignupEmail(event.currentTarget.value);
                    }}
                    type="text"
                    className="login__input"
                    placeholder="Email address"
                  />
                </div>
                <div>
                  <input
                    onChange={(event) => {
                      setSignupPassword(event.currentTarget.value);
                    }}
                    type="password"
                    className="login__input"
                    placeholder="Password"
                  />
                </div>
                <div>
                  <button onClick={signUP} className="login__button">
                    Sign Up
                  </button>
                </div>
                <div>
                  <div onClick={switchPanel} className="forget_Text">
                    Already have an account?
                  </div>
                </div>
              </div>
            )}
          </Paper>
        </Grid>
        <Grid item xs={1}></Grid>
      </Grid>
    </div>
  );
};

export default LoginHome;
