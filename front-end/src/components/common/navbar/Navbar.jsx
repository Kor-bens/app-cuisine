import React from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa6";
import { FaRegUser, FaUser  } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";

export default function NavBar() {
  return (
    <nav className="  border-t shadow-md 
    mobile:fixed mobile:bottom-0 mobile:left-0 mobile:w-full
    md:text-2xl"> 
    <div className="flex 
    md:mb-0 ">
      <ul className="w-full items-center flex place-content-evenly text-zinc-50 font-bold h-16 bg-gray-200">
        <li>
          <div className="flex flex-col items-center">
            <Link to="/"><IoHomeSharp className=" text-gray-500
            mobile:h-10 mobile:w-7
            md:hidden" /></Link>
            <Link to="/" className="md:text-3xl text-slate-700
            mobile:hidden
            ">Accueil</Link>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <FaSearch  className=" text-gray-500
            mobile:h-10 mobile:w-7
            md:hidden" />
            <Link to="" className="md:text-3xl text-slate-700
            mobile:hidden
            ">Explorer</Link>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
          <Link to="" className="text-slate-500 md:text-3xl
            mobile:hidden
            ">Ma cuisine</Link>
            <Link to="" className=""><FaBookOpen className="text-gray-500
            mobile:h-10 mobile:w-7
             md:hidden"/></Link>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <Link to="/connexion" className="text-slate-500 md:text-3xl
            mobile:hidden
            ">Mon compte</Link>
            <Link to="/connexion" className="">
              <FaUser className="text-gray-500
               mobile:h-10 mobile:w-6
               md:hidden"/></Link>
          </div>
        </li>
      </ul>
    </div>
    </nav>
  );
}
