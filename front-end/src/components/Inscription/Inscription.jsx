import React, { useState } from "react";

import "./inscription.css";
import NavBar from "../common/navbar/Navbar";
import backgroundImage from '../../assets/background/bg.jpg'

function FormulaireInscription() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`
  }
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    confirmationMotDePasse: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  const toggleShowPasswordConfirm = () => {
    setShowPasswordConfirm(!showPasswordConfirm);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  if (formData.nom) {
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    const fildsToCheck = [
      "nom",
      "prenom",
      "email",
      "motDePasse",
      "confirmationMotDePasse",
    ];
    const emptyFields = fildsToCheck.filter((field) => !formData[field]);

    let errorMessage = "";

    if (emptyFields.length === 1) {
      errorMessage = `Veuillez remplir le champ suivant : ${emptyFields[0]}`;
    } else if (emptyFields.length > 1) {
      errorMessage = `Veuillez remplir les champs suivants : ${emptyFields.join(
        ", "
      )}`;
    }

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    // Vérification de la correspondance des mots de passe
    if (formData.motDePasse !== formData.confirmationMotDePasse) {
      const errorMessage = "Les mots de passe ne correspondent pas.";
      setErrorMessage(errorMessage);
      return;
    }
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className=" flex flex-col w-5/5 px-8 
        mobile:mb-4 mobile:mt-4 mobile:w-5/5 mobile:justify-center mobile:h-full
    md:text-center  md:justify-center md:h-full md:w-5/5 md:mt-16">
        <h1 className="px-8 text-center text-slate-200 mb-6 font-bold
        mobile:text-3xl
        md:text-5xl">Créer un compte</h1>
        {errorMessage && <p className="text-red-500 md:text-3xl md:font-bold">{errorMessage}</p>}
        <div className="input-group ">
          {/* <label htmlFor="nom" className=" text-slate-200 font-bold
          md:text-3xl ">
            Nom
          </label> */}
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center
            mobile:w-full 
            md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12"
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          {/* <label htmlFor="prenom" className="text-slate-200 font-bold 
          md:text-3xl">
            Prénom
          </label> */}
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center 
            mobile:w-full 
            md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12"
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          {/* <label htmlFor="email" className="text-slate-200 font-bold 
          md:text-3xl">
            Email
          </label> */}
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center
             mobile:w-full
              md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          {/* <label htmlFor="motDePasse" className="text-slate-200 font-bold 
          md:text-3xl">
            Mot de passe
          </label> */}
          <div className="input-container md:px-48 relative">
  <input
    className="bg-orange-100 rounded-md text-center
     mobile:w-full 
     md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12 md:pl-3 md:pr-16"
    type={showPassword ? "text" : "password"}
    name="motDePasse"
    placeholder="Mot de passe"
    value={formData.motDePasse}
    onChange={handleChange}
  />
  <button
    type="button"
    onClick={toggleShowPassword}
    className="absolute right-48 px-4 flex items-center justify-center h-full text-zinc-600 font-bold md:text-2xl"
  >
    {showPassword ? "Cacher" : "Afficher"}
  </button>
</div>
        </div>
        <div className="input-group">
          {/* <label htmlFor="confirmationMotDePasse" className="text-slate-200 font-bold 
          md:text-3xl">
            Confirmation du mot de passe
          </label> */}
          <div className="input-container md:px-48">
            <input
             className="bg-orange-100 rounded-md text-center
             mobile:w-full 
             md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12 md:pl-3 md:pr-16"
              type={showPasswordConfirm ? "text" : "password"}
              name="confirmationMotDePasse"
              placeholder="Confirmation de mot de passe"
              value={formData.confirmationMotDePasse}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={toggleShowPasswordConfirm}
              className="absolute right-56 px-4 flex items-center justify-center h-full text-zinc-600 font-bold
              md:text-2xl"
            >
              {showPasswordConfirm ? "Cacher" : "Afficher"}
            </button>
          </div>
        </div>
        <div>
          <button
            className="text-slate-200 font-bold rounded-md mt-5 px-8 bg-orange-500
         mobile:w-full 
         md:text-2xl md:h-12 md:mb-3"
            type="submit"
          >
            S'inscrire
          </button>
        </div>
      </form>
    </>
  );
}
export default FormulaireInscription;
