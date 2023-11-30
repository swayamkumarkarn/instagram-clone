import React, { useState } from 'react';
import './SignUp.css';
// import { auth } from '../firebase'; // Make sure to replace this with the correct path


const SignUp = () => {
  const [emailId, setEmailId] = useState(null);
  const [name, setName] = useState(null);
  const [userName, setUserName] = useState(null);
  const [password, setPassword] = useState(null);

  const newSignUp = () => {
    // auth
    //   .createUserWithEmailAndPassword(emailId, password)
    //   .then((userCredential) => {
    //     // Signed in
    //     var user = userCredential.user;

    //     let payload = {
    //       userId: user.uid,
    //       userName: userName,
    //       name: name,
    //       profileImage: '',
    //     };

    //     const requestOptions = {
    //       method: 'POST',
    //       headers: { 'Content-Type': 'application/json' },
    //       body: JSON.stringify(payload),
    //     };

    //     fetch('http://localhost:8080/users', requestOptions)
    //       .then((response) => response.json())
    //       .then((data) => {
    //         localStorage.setItem('users', JSON.stringify(user));
    //         window.location.reload();
    //       })
    //       .catch((error) => {});

    //     // ...
    //   })
    //   .catch((error) => {
    //     var errorCode = error.code;
    //     var errorMessage = error.message;
    //     // ..
    //   });
  };

  return (
    <div>
      <input
        className="logipage__text"
        onChange={(event) => {
          setEmailId(event.currentTarget.value);
        }}
        type="text"
        placeholder="Mobile number or Email"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setName(event.currentTarget.value);
        }}
        type="text"
        placeholder="Full Name"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setUserName(event.currentTarget.value);
        }}
        type="text"
        placeholder="Username"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setPassword(event.currentTarget.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button className="login__button" onClick={newSignUp}>
        Sign up
      </button>
    </div>
  );
};

export default SignUp;
