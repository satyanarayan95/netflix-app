import React, { useState } from "react";
import "./SignUpScreen.css";


import  auth  from '../firebase';
import { useHistory } from "react-router-dom";

function SignUpScreen() {
    const history=useHistory();
 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const register = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email,password).then((authUser)=>{
        console.log(authUser);
        history.push("/login");
        setEmail("");
        setPassword("")
    }).catch((error)=>{
        console.log(error);
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
                    Sign up
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
                <button type="submit" onClick={register} >Sign up</button>
               
            </form>

        </div>
      </div>
    </div>
  );
}

export default SignUpScreen;

     

       
