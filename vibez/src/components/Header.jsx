import React from 'react';
import logoSpotify from "../assets/logo/spotify-logo.png";

const Header = () => {
  return (
    <div className="header">
        <img src= {logoSpotify} alt="Logo"/>

        <a className= 'header__link' href='/'>
            <h1>Vibez</h1>
        </a>
    </div>
  );
};

export default Header;