import React, {useState,useEffect} from 'react'
import {Link } from "react-router-dom"
import "./Nav.css"

function Nav() {
   
    const[show,handleShow]=useState(false);
    const transitionNavBar=()=>{
        if(window.scrollY>100)
        {   
            console.log("true")
            handleShow(true)

        }else{
            console.log("false")
            handleShow(false)

        }
    }
    useEffect(()=>{
    //use effect by default starting re run haba then scroll hele event listner transition bar function check kariba
    //jadi transtion bar true hela mean 100 y axis re scroll haigala then 35 line conditon re black haijiba 
   // au use effect re clean up function declare haichi

        window.addEventListener("scroll",transitionNavBar);

        //cleanup function
        return()=>{
            console.log("cleanup")
            window.removeEventListener("scroll",transitionNavBar)
        }

    },[])

    return (
        //if show is true then use nav__black component

        <div className= {`nav ${show && "nav__black"}`} >

         <div className="nav__content">
            
         <img 
            className="nav__logo"
        //    src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"
           src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/2560px-Netflix_2015_logo.svg.png"
           />
           
           <Link to="/profile"> <img 
             className="nav__avatar"
             src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
            /></Link>
           


         </div>

        </div>
    )
}

export default Nav
