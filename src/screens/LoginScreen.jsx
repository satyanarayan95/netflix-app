import React, { useState } from "react";
import "./LoginScreen.css";


import  auth  from '../firebase';
import { Link, useHistory } from "react-router-dom";

function LoginScreen() {
    const history=useHistory();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn=(e)=>{
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((authUser)=>{

        localStorage.setItem("isSignin",true)
        history.push("/")

        console.log(authUser);

    }).catch((error)=>{
        console.log(error)
    })  
}

  return (
    <div className="loginScreen ">
      <div className="loginScreen__background">
        <img
          className="loginScreen__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
          alt=""
        />
       

        <div className="loginScreen__gradient"></div>

        <div className="loginScreen__body">
            <form>
                <h1>
                    Sign In
                </h1>
                <input   placeholder="Email" type="email" 
                 onChange={(e)=>{
                     setEmail(e.target.value);
                 }}
                ></input>
                <input   placeholder="password" type="passsword"
                  onChange={(e)=>{
                      setPassword(e.target.value);
                  }}
                
                ></input>
                <button type="submit" onClick={signIn} >Sign in</button>
                <h4>
                    <span className="signupScreen__grey">  New To Netflix? </span>
                      <Link to="/signup">
                      <span className="signUpScreen__link" > SignUp Now.</span>
                      </Link>
                  

                </h4>
            </form>

        </div>
      </div>
    </div>
  );
}

export default LoginScreen;

     

       
