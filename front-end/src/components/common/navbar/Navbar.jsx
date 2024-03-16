import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import { AddIcon } from "./icons/AddIcon"
// import { LogInIcon } from "./icons/LogInIcon"

export default function NavBar() {
  return (
    <nav className="  border-t shadow-md 
    mobile:fixed mobile:bottom-0 mobile:left-0 mobile:w-full
    md:text-2xl"> 
    <div className="flex 
    md:mb-0 ">
      <ul className="w-full flex place-content-evenly border-2 border-zinc-800 text-zinc-50 font-bold rounded-xl py-11">
        <li>
          <div className="flex flex-col items-center">
            <HomeIcon className=" text-black 
            mobile:h-5 mobile:w-5
            md:hidden" />
            <a href="/" className="md:text-3xl">Accueil</a>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <MagnifyingGlassIcon className=" text-black 
            mobile:h-5 mobile:w-5
            md:hidden" />
            <a href="" className="md:text-3xl">Explorer</a>
          </div>
        </li>
        <li>
          <div className="flex flex-col item-center">
            {/* <AddIcon /> */}
            <a href="/ajout" className="md:text-3xl">Ajouter</a> 
          </div>
        </li>
        <li className="hidden md:block ">
          {" "}
          {/* Cacher l'élément sur mobile */}
          <a href="/inscription" className="md:text-3xl">S'inscrire</a>
        </li>
        <li>
          <div className="flex flex-col items-center">
            {/* <LogInIcon /> */}
            <a href="" className="md:text-3xl">Se connecter</a>
          </div>
        </li>
      </ul>
    </div>
    </nav>
  );
}
