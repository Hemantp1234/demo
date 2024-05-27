import React from "react";
import { CiHome } from "react-icons/ci";
import { FaSearchDollar } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { FaRegBookmark } from "react-icons/fa";
import { RiSettingsLine } from "react-icons/ri";
import './index.css'



function SideBar()
{
    return(
        <>
        <div className="side-bar">
        <ul>
        <li><CiHome/></li>
        <li><FaSearchDollar/></li>
        <li><IoBookOutline/></li>
        <li><FaRegBookmark/></li>
        <li> <RiSettingsLine/></li>
        </ul>
        </div>

        
        
        </>
    );
}
export default SideBar;