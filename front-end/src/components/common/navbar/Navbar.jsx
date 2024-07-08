import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaSearch } from "react-icons/fa";
import { BiHome } from "react-icons/bi";
import { HiHome } from "react-icons/hi";
import { FaBookOpen } from "react-icons/fa6";
import { FaRegUser, FaUser  } from "react-icons/fa";
import { IoHomeSharp } from "react-icons/io5";
import { TbLogout } from "react-icons/tb";

export default function NavBar({ isAuthenticated, setIsAuthenticated }) {
  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(true);
  };

  return (
    <nav className="border-t shadow-md mobile:fixed mobile:bottom-0 mobile:left-0 mobile:w-full md:text-2xl sm:fixed sm:bottom-0 sm:left-0 sm:w-full"> 
      <div className="flex md:mb-0">
        <ul className="w-full items-center flex place-content-evenly text-zinc-50 font-bold h-16 bg-gray-200">
          <li>
            <div className="flex flex-col items-center">
              <Link to="/"><IoHomeSharp className="text-gray-500 mobile:h-10 mobile:w-7 md:hidden" /></Link>
              <Link to="/" className="md:text-3xl text-slate-700 mobile:hidden">Accueil</Link>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center">
              <FaSearch className="text-gray-500 mobile:h-10 mobile:w-7 md:hidden" />
              <Link to="/" className="md:text-3xl text-slate-700 mobile:hidden">Explorer</Link>
            </div>
          </li>
          <li>
            <div className="flex flex-col items-center">
              <Link to="/mes-recettes-categories" className="text-slate-500 md:text-3xl mobile:hidden">Mes recettes</Link>
              <Link to="/mes-recettes" className=""><FaBookOpen className="text-gray-500 mobile:h-10 mobile:w-7 md:hidden" /></Link>
            </div>
          </li>
          {isAuthenticated ? (
            <>
              <li>
                <div className="flex flex-col items-center">
                  <TbLogout/>
                  <button onClick={handleLogout} className="text-slate-500 md:text-3xl mobile:hidden">Se déconnecter</button>
                  <button onClick={handleLogout} className="">
                    <TbLogout className="text-gray-500 mobile:h-10 mobile:w-7 md:hidden" />
                    {console.log('logout')}
                  </button>
                </div>
              </li>
            </>
          ) : (
            <li>
              <div className="flex flex-col items-center">
                <Link to="/connexion" className="text-slate-500 md:text-3xl mobile:hidden">Mon compte</Link>
                <Link to="/connexion" className="">
                  <FaUser className="text-gray-500 mobile:h-10 mobile:w-6 md:hidden" />
                  {console.log('Connexion')}
                </Link>
              </div>
            </li>
          )}
        </ul>
        
      </div>
    </nav>
  );
}
//TODO REGLER AFFICHAGE POUR GRAND ECRAN
//TODO AFFICHER LE LOGOUT LORS DE LA CONNEXION