import React from "react";
import { Link } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
// import { AddIcon } from "./icons/AddIcon"
// import { LogInIcon } from "./icons/LogInIcon"

export default function NavBar() {
  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t  shadow-md"> 
    <div className="flex mb-0 ">
      <ul className="max-w-screen-lg w-full flex place-content-evenly space-x-4 border-2 border-red-500 rounded-3xl">
        <li>
          <div className="flex flex-col items-center">
            <HomeIcon className="h-5 w-5 text-black" />
            <a href="/">Accueil</a>
          </div>
        </li>
        <li>
          <div className="flex flex-col items-center">
            <MagnifyingGlassIcon className="h-5 w-5 text-black" />
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
