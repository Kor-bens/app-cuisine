import React, { useState } from "react";

import "./inscription.css"
import NavBar from "../common/navbar/Navbar";

function FormulaireInscription() {
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
    confirmationMotDePasse: "",
  });

  const [errorMessage, setErrorMessage] = useState('');

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

  if(formData.nom){

  }

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation des champs
    const fildsToCheck = ['nom', 'prenom', 'email', 'motDePasse', 'confirmationMotDePasse']
    const emptyFields = fildsToCheck.filter(field => !formData[field])

    let errorMessage = '';

  if (emptyFields.length === 1) {
    errorMessage = `Veuillez remplir le champ suivant : ${emptyFields[0]}`;
  } else if (emptyFields.length > 1) {
    errorMessage = `Veuillez remplir les champs suivants : ${emptyFields.join(', ')}`;
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
    <form onSubmit={handleSubmit} className=" flex flex-col w-5/5 px-8 
    md:text-center md:items-center md:justify-center md:h-screen md:w-full">
      <h1 className="px-8 text-center md:text-5xl mb-6">Créer un compte</h1>
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="input-group ">
        <label htmlFor="nom" className="md:text-3xl">Nom</label>
        <div className="input-container px-10">
          <input
            className="bg-orange-100 rounded-md
            mobile:w-full 
            md:w-full md:mb-3 md:mt-3 md:text-2xl"
            type="text"
            name="nom"
            placeholder="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="prenom" className="md:text-3xl">Prénom</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md 
            mobile:w-full 
            md:w-full md:mb-3 md:mt-3 md:text-2xl"
            type="text"
            name="prenom"
            placeholder="prénom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="email" className="md:text-3xl">Email</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md
             mobile:w-full
              md:w-full md:mb-3 md:mt-3 md:text-2xl"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="motDePasse" className="md:text-3xl">Mot de passe</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md
             mobile:w-full 
             md:w-full md:mb-3 md:mt-3 md:text-2xl"
            type={showPassword ? "text" : "password"}
            name="motDePasse"
            placeholder="mot de passe"
            value={formData.motDePasse}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleShowPassword}
          className="md:text-2xl">
            {showPassword ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="confirmationMotDePasse" className="md:text-3xl">
          Confirmation du mot de passe
        </label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md
             mobile:w-full md:mb-3 md:mt-3 md:text-2xl"
            type={showPasswordConfirm ? "text" : "password"}
            name="confirmationMotDePasse"
            placeholder="confirmation de mot de passe"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleShowPasswordConfirm}
          className="md:text-2xl">
            {showPasswordConfirm ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
      <div>
        <button className="bg-orange-100 rounded-md mt-5 px-8 
         mobile:w-full 
         md:text-2xl" 
         type="submit">
          S'inscrire
        </button>
      </div>
    </form>
  </>
  );
}
export default FormulaireInscription;
