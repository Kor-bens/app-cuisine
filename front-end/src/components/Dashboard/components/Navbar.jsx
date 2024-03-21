import React, { useState } from "react";
import { Link } from "react-router-dom";
import { HomeIcon, MagnifyingGlassIcon } from "@heroicons/react/24/solid";
import { GiCookingPot } from "react-icons/gi";
import { BiHome } from "react-icons/bi";
// import { AddIcon } from "./icons/AddIcon"
// import { LogInIcon } from "./icons/LogInIcon"
import { FaRegUser } from "react-icons/fa";
import RecetteFormulaire from "../../AjoutRecette/RecetteFormulaire";
import ListeRecettes from "../../ListeRecettes/ListeRecettes";
import { updateUser } from '../../../userUtils';


//TODO styliser le dropDown de ma cuisine 
//TODO trouver un background pour le menu deroulant
//TODO afficher liste de cuisine à l'utilisateur 
//TODO choix pour l'affichage des fonctionnalités cuisine "Ma cuisine" (nouvelle page ou affiché directement sur le dashboard)
//TODO résoudre affichage du nom de l'user

export default function NavBar() {
    const [showDropDown, setShowDropDown] = useState(false);
    const [showDropDownCuisine, setShowDropDownCuisine] = useState(false);
    const [showRecetteFormulaire, setShowRecetteFormulaire] = useState(false);
    const [showListeRecette, setShowListeRecette] = useState(false);
    const [userName, setUserName] = useState("");

    const toggleDropDown = () => {
        setShowDropDown(!showDropDown);
    };

    const toggleDropDownCuisine = () => {
        setShowDropDownCuisine(!showDropDownCuisine);
    };
    
    const toggleRecetteFormulaire = () => {
        setShowRecetteFormulaire(!showRecetteFormulaire);
    };

    const toggleShowListRecette = () => {
        setShowListeRecette(!showListeRecette);
    };

   const updateUser = (userName) => {
        setUserName(userName);
    };
    return (
        <>
            <nav className="border-t shadow-md md:text-2xl">
                <div className="flex md:mb-0">
                    <ul className="w-full items-center flex place-content-evenly border-2 border-zinc-800 text-zinc-50 font-bold rounded-xl h-20">
                        <li>
                            <div className="flex flex-col items-center">
                                <Link to="/"><BiHome className="mobile:h-5 mobile:w-5 md:hidden" /></Link>
                                <Link to="/" className="md:text-3xl mobile:hidden">Accueil</Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-center">
                                <MagnifyingGlassIcon className="mobile:h-5 mobile:w-5 md:hidden" />
                                <Link to="" className="md:text-3xl mobile:hidden">Explorer</Link>
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-center relative">
                                <GiCookingPot className="mobile:h-5 mobile:w-5 md:hidden" />
                                <button
                                    onMouseEnter={toggleDropDownCuisine}
                                    // onMouseLeave={toggleDropDownCuisine}
                                    className="md:text-3xl mobile:hidden"
                                ><Link to="/ma-cuisine">Ma cuisine</Link></button>
                                {showDropDownCuisine && (
                                    <div onMouseLeave={toggleDropDownCuisine} className="flex flex-col absolute top-9 left-0 opacity-80 bg-zinc-800 border-zinc-800 py-2 rounded-md">
                                        <button onClick={toggleRecetteFormulaire} className="md:text-2xl mobile:hidden">
                                            <Link to="/ajout" className="md:text-2xl mobile:hidden">Ajouter une recette</Link></button>
                                        <button onClick={toggleShowListRecette} className="md:text-2xl mobile:hidden">
                                        <Link to="/mes-recettes" className="md:text-2xl mobile:hidden">Afficher mes recettes</Link></button>
                                    </div>
                                )}
                            </div>
                        </li>
                        <li>
                            <div className="flex flex-col items-center relative">
                                <button
                                    onMouseEnter={toggleDropDown}
                                    className="mobile:hidden md:hidden lg:text-3xl lg:block"
                                >
                                    {userName}
                                </button>
                                <FaRegUser onClick={toggleDropDown} className="cursor-pointer lg:hidden" />
                                {showDropDown && (
                                    <div onMouseLeave={toggleDropDown} className="flex flex-col absolute top-full left-0 opacity-80 bg-zinc-800 border-zinc-800 py-2 rounded-md">
                                        <Link className="block px-4 py-2 text-zinc-50 hover:bg-zinc-200" to="/">Profil</Link>
                                        <Link className="block px-4 py-2 text-zinc-50 hover:bg-zinc-200" to="/">Paramètres</Link>
                                        <Link className="block px-4 py-2 text-zinc-50 hover:bg-zinc-200" to="/">Déconnexion</Link>
                                    </div>
                                )}
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
            {/* {showRecetteFormulaire && <RecetteFormulaire />}
            {showListeRecette && <ListeRecettes />} */}
        </>
    );
}
