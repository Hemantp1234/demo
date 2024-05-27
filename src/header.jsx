import React from 'react';
import './index.css';
import { RiVipFill } from "react-icons/ri";
import { FaRegCompass } from "react-icons/fa6";
import { FaChalkboardUser } from "react-icons/fa6";
import { CiSearch } from "react-icons/ci";

function Header() {
  const currentDate = new Date().toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const username = "Hemant";

  return (
    <>
      <header className="header">
        <div className="user_name">
          <h1>Hello,{username} <span><RiVipFill/></span></h1>
          <p>{currentDate}</p>
        </div>
        <ul className="nav_list">
          <li ><span><FaRegCompass/></span> For you</li>
          <li> <span><FaChalkboardUser/></span>Screener</li>
          <li><span><CiSearch/></span></li>
        </ul>
        
      </header>
      
     
    </>
  );
}

export default Header;
