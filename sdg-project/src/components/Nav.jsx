import React from "react";
import { FaHome } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";
import { FaRegBookmark } from "react-icons/fa";
import { FaBell } from "react-icons/fa";
import { FaUserCircle } from "react-icons/fa";


function Nav() {
    return(
        <>
        <nav className="h-[64px] absolute w-screen top-0 left-0 flex justify-around items-center bg-blue-500 z-50">
            <div>
               <input type="search" name="search" placeholder="🔍 Search" className="p-3"/>
            </div>
            <div className="flex flex-row gap-8">
                <div className={`${window.location.pathname == "/home" ? 'text-white border-b-4 border-b-white' : ''} flex flex-col items-center justify-center`}>
                    <FaHome className={` ${window.location.pathname == "/home" ? 'text-white' : ''} h-[25px] w-auto`} />
                    <a href="/" className="">Home</a></div>
                
                <div className={`${window.location.pathname == "/opportunities" ? 'text-white border-b-4 border-b-white' : ''} flex flex-col items-center justify-center`}>
                    <FaBriefcase className={` ${window.location.pathname == "/opportunities" ? 'text-white' : ''} h-[25px] w-auto`} />
                    <a href="/opportunities" className="">Opportunities</a>
                </div>

                <div className={`${window.location.pathname == "/notifications" ? 'text-white border-b-4 border-b-white' : ''} flex flex-col items-center justify-center`}>
                    <FaBell className={` ${window.location.pathname == "/notifications" ? 'text-white' : ''} h-[25px] w-auto`} />
                    <a href="/notifications" className="">Notifications</a>
                </div>

                <div className={`${window.location.pathname == "/user" ? 'text-white border-b-4 border-b-white' : ''} flex flex-col items-center justify-center`}>
                    <FaUserCircle className={` ${window.location.pathname == "/user" ? 'text-white' : ''} h-[25px] w-auto`} />
                    <a href="/user" className="">Me</a>
                </div>


            </div>
        </nav>
        </>
    )
}

export default Nav;