import { useState } from "react";
import { useNavigate } from "react-router-dom";
import * as React from 'react';
import Navbar from './navbar'

const Login = () => {
  const navigate = useNavigate();
  const [username, setusername] = useState("");
  const [password, setpassword] = useState("");
  const [authenticated, setauthenticated] = useState(
    localStorage.getItem(localStorage.getItem("authenticated") || false)
  );
  
  const users = [{ username: "Yo", password: "test1234" }];
  const handleSubmit = (e) => {
    e.preventDefault();
    const account = users.find((user) => user.username === username);
    if (account && account.password === password) {
     navigate('/navbar')
    }
  };
  return (
    <div style={{marginLeft:'40%',marginTop:'10%'}} >
      <h1>LOGIN PAGE</h1>
      <form onSubmit={handleSubmit} >
      USER NAME :-
        <input
          type="text"
          name="Username"
          value={username}
          onChange={(e) => setusername(e.target.value)}
        />    
        <br/>
        <br/>
        PASSWORD :-
        <input
          type="password"
          name="Password"
          onChange={(e) => setpassword(e.target.value)}
        />
        <br/>
        <br/>
        <input type="submit" value="Submit" />
      </form>
    </div>
    
  );
};

export default Login;

