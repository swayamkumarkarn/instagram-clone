import React, { useState } from 'react';
import '../LoginPage/LoginPage.css';
import {useNavigate} from "react-router-dom";

const SignIN = () => {
  const [emailId, setEmailId] = useState('');
  const [password, setPassword] = useState('');
  const [isLogged, setIsLogged] = useState(false);
  const navigate= useNavigate()

  const login = () => {
    // Handle login logic here using emailId and password
    setIsLogged(true);
    console.log('Logging in with:', emailId, password,"isLogged : ",isLogged);
    {isLogged && (
        navigate("/home")
      )}
  };

  return (
    <div>
      <input
        className="logipage__text"
        onChange={(event) => {
          setEmailId(event.currentTarget.value);
        }}
        type="text"
        placeholder="Phone number, username, or email"
      />
      <input
        className="logipage__text"
        onChange={(event) => {
          setPassword(event.currentTarget.value);
        }}
        type="password"
        placeholder="Password"
      />
      <button className="login__button" onClick={login}>
        Log In
      </button>
    </div>
  );
};

export default SignIN;
