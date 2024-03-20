import React from "react";
import NavBar from "../common/navbar/Navbar";
import "./connexion.css";
export default function Connexion() {
  // TODO FORMULAIRE DE CONNEXION
  return (
    <>
      <NavBar />
      <form
        className="flex flex-col w-12/12  
        mobile:mb-4 mobile:w-5/5 mobile:justify-center mobile:items-center mobile:h-screen mobile:w-full
         md:text-center md:justify-center md:h-full md:w-5/5 md:mt-16
        lg:h-full lg:w-6/12 lg:mx-auto
          "
      >
        <h1
          className="px-8 text-center text-slate-200 mb-6 font-bold 
        mobile:text-3xl 
        md:text-5xl"
        >
          Connexion
        </h1>
        <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center 
              mobile:w-full mobile:mb-4 mobile:mt-6 mobile:h-8 mobile:pl-14 mobile:pr-14 
              md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12
              "
              type="text"
              placeholder="Nom ou adresse mail"
              name="NomOrMail"
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center 
              mobile:w-full mobile:mb-4 mobile:mt-6 mobile:h-8 mobile:pl-14 mobile:pr-14 
              md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12
              "
              type="password"
              placeholder="Mot de passe"
              name="mdp"
            />
          </div>
        </div>
        <button
          className="w-4/12 mx-auto text-slate-200 text-center font-bold rounded-md mt-5 px-8 bg-orange-500 hover:bg-orange-700
             mobile:w-12/12 mobile:h-9 
             md:text-2xl md:h-12 md:mb-3
             "
          type="submit"
        >
          Se connecter
        </button>
      </form>
    </>
  );
}
