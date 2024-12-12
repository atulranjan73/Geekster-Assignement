import React, { useState } from "react";
import { Prev } from "react-bootstrap/esm/PageItem";

function Header() {

  const [navbarModel , setnavbarModel] =useState(false)
  
  const handleClickModel = ()=>{
  setnavbarModel(Prev => !Prev)
    
  }
  return (
    <header>
      <div className="top">
        <img src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500" className="logo" alt="Logo" />

        <div className="search-flex">
          <div className="search">
            <form>
              <input type="text" placeholder="Search" />
              <div className="lens">
                <i className="fa-solid fa-search"></i>
              </div>
            </form>
          </div>
          <div className="microphone">
            <i className="fa-solid fa-microphone"></i>
          </div>
        </div>

        <div className="icons icons-op">
     
       <i class="fa-solid fa-paperclip"></i>
        <i class="fa-solid fa-bell"></i>
          <img onClick={handleClickModel}
            src="https://unsplash.it/36/36"
            className="loggedin-user"
            alt="User"
          />
       
       {navbarModel &&
         <div className="navbar-model">
         <div className="navbar-model-option">profile</div>
         <div className="navbar-model-Logout">Logout</div>
         <div className="navbar-model-Login">Login</div>
       </div>
       }
        </div>
      </div>
    </header>
  );
}

export default Header;
