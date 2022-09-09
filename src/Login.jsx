import React, { useRef } from "react";
import './App.css';
import { useNavigate } from 'react-router-dom';

function Login() {
  const email = useRef();
  const password = useRef();
  const navigate = useNavigate();
  const handleSubmit = () => {
    if(email.current.value == "test@gmail.com" && password.current.value == "1234") {
      localStorage.setItem("emaildata", "test@gmail.com");
      localStorage.setItem("passwordData", "1234");
      navigate("/home", { replace: true });
    } 
  }
  return (
    <div className="">
      <h1 className="title">Login</h1>
        <div className="new">
          <div className="login">
            <form className="forn" onSubmit={handleSubmit}>
              <label className="labels" htmlFor="name">Email:</label><br /><br />
              <input 
                ref={email}
                type="email"
                className="input__box"
                required
              />
              <br /><br /><br />
              <label className="labels" htmlFor="password">Password:</label><br /><br />
              <input 
                ref={password}
                type="password"
                className="input__box"
                required
              />
              <button className="btn">Login</button>
            </form>
          </div>
        </div>
    </div>
  );
}

export default Login;