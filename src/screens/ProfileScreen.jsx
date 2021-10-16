import React from 'react'
import "./ProfileScreen.css"
import {Link } from "react-router-dom"
import Nav from '../Component/Nav'

function ProfileScreen() { 
    return ( 
        <div className="profileScreen">
            {/* <Link to="/">

               <Nav/>
               
            </Link> */}
             <Nav/>
          

           <div className="profileScreen__body">
               
               <h1>Edit Profile</h1>
               <div className="profileScreen__info">
                   <img 
                   src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                   alt=""
                   />
                   <div className="profilescreen__details">
                       <h2>payment details</h2>
                       <div className="profileScreen__plans">
                           <h3>Plans</h3>
                           <p></p>
                           <button  className="profileScreen__signOut">Signout</button>
                       </div>
                   </div>

               </div>

           </div>
            
            {/* <Link to="/">
             <img 
            className="nav__logo"
           src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png"/>
           </Link> */}

        </div>
    ) 
}

export default ProfileScreen
