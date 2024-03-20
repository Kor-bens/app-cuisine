import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { BiHome } from "react-icons/bi";
// import { AddIcon } from "./icons/AddIcon"
// import { LogInIcon } from "./icons/LogInIcon"
import { FaRegUser } from "react-icons/fa";

export default function NavBar() {
  return (
    <nav className="  border-t shadow-md 
    mobile:fixed mobile:bottom-0 mobile:left-0 mobile:w-full
    md:text-2xl"> 
    <div className="flex 
    md:mb-0 ">
      <ul className="w-full items-center flex place-content-evenly border-2 border-zinc-800 text-zinc-50 font-bold rounded-xl h-28">
        <li>
          <div className="flex flex-col items-center">
            <Link to="/"><BiHome className=" 
            mobile:h-5 mobile:w-5
            md:hidden" /></Link>
            <Link to="/" className="md:text-3xl
            mobile:hidden
            ">Accueil</Link>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <MagnifyingGlassIcon className=" 
            mobile:h-5 mobile:w-5
            md:hidden" />
            <Link to="" className="md:text-3xl
            mobile:hidden
            ">Explorer</Link>
          </div>
        </li>
        {/* <li> */}
          {/* <div className="flex flex-col item-center"> */}
            {/* <AddIcon /> */}
            {/* <Link to="/ajout" className="md:text-3xl">Ajouter</Link> 
          </div>
        </li>
        <li className="hidden md:block ">
          {" "} */}
          {/* Cacher l'élément sur mobile */}
        {/* </li> */}
        {/* <li>
          <div className="flex flex-col items-center"> */}
            {/* <LogInIcon /> */}
            {/* <Link to="" className="md:text-3xl">Se connecter</Link> */}
          {/* </div>
        </li> */}
        <li>
          <div className="flex flex-col items-center">
            {/* <LogInIcon /> */}
            <Link to="/connexion" className="
            mobile:hidden
            md:hidden">Mon compte</Link>
            <Link to="/connexion" className=""><FaRegUser/></Link>
          </div>
        </li>
      </ul>
    </div>
    </nav>
  );
}
