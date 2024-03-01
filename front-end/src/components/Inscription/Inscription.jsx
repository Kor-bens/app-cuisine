import React, { useState } from "react";

import "./inscription.css"

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
      <h1 className="px-8 text-center text-xl">Créer un compte</h1>
    <form onSubmit={handleSubmit} className="flex flex-col w-5/5 mt-20 px-8">
      {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      <div className="input-group ">
        <label htmlFor="nom">Nom</label>
        <div className="input-container px-10">
          <input
            className="bg-orange-100 rounded-md mobile:w-full"
            type="text"
            name="nom"
            placeholder="nom"
            value={formData.nom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="prenom">Prénom</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md mobile:w-full"
            type="text"
            name="prenom"
            placeholder="prénom"
            value={formData.prenom}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="email">Email</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md mobile:w-full"
            type="email"
            name="email"
            placeholder="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="motDePasse">Mot de passe</label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md mobile:w-full"
            type={showPassword ? "text" : "password"}
            name="motDePasse"
            placeholder="mot de passe"
            value={formData.motDePasse}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleShowPassword}>
            {showPassword ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
      <div className="input-group">
        <label htmlFor="confirmationMotDePasse">
          Confirmation du mot de passe
        </label>
        <div className="input-container">
          <input
            className="bg-orange-100 rounded-md mobile:w-full"
            type={showPasswordConfirm ? "text" : "password"}
            name="confirmationMotDePasse"
            placeholder="confirmation de mot de passe"
            value={formData.confirmationMotDePasse}
            onChange={handleChange}
          />
          <button type="button" onClick={toggleShowPasswordConfirm}>
            {showPasswordConfirm ? "Cacher" : "Afficher"}
          </button>
        </div>
      </div>
      <div>
        <button className="bg-orange-100 rounded-md mt-5 mobile:w-full px-8" type="submit">
          S'inscrire
        </button>
      </div>
    </form>
  </>
  );
}
export default FormulaireInscription;
