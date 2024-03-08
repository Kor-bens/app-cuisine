import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import { AddIcon } from "./icons/AddIcon"
// import { LogInIcon } from "./icons/LogInIcon"

export default function NavBar() {
  return (
    <nav className=" bg-white border-t shadow-md 
    mobile:fixed mobile:bottom-0 mobile:left-0 mobile:w-full"> 
    <div className="flex mb-0 ">
      <ul className="max-w-screen-lg w-full flex place-content-evenly space-x-4 border-2 border-red-500 rounded-3xl">
        <li>
          <div className="flex flex-col items-center">
            <HomeIcon className=" text-black 
            mobile:h-5 mobile:w-5" />
            <a href="/">Accueil</a>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <MagnifyingGlassIcon className=" text-black 
            mobile:h-5 mobile:w-5" />
            <a href="">Explorer</a>
          </div>
        </li>
        <li>
          <div className="flex flex-col item-center">
            {/* <AddIcon /> */}
            <Link to="/ajout">Ajouter</Link> {/* Utiliser Link pour rediriger vers la page d'ajout */}
          </div>
        </li>
        <li className="hidden md:block">
          {" "}
          {/* Cacher l'élément sur mobile */}
          <a href="">S'inscrire</a>
        </li>
        <li>
          <div className="flex flex-col items-center">
            {/* <LogInIcon /> */}
            <a href="">Se connecter</a>
          </div>
        </li>
      </ul>
    </div>
    </nav>
  );
}
