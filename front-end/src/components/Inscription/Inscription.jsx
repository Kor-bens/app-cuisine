import React, { useState } from "react";
import axios from "axios";
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
    // confirmationMotDePasse: "",
  });

  const [errorMessage, setErrorMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordConfirm, setShowPasswordConfirm] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

  // const toggleShowPasswordConfirm = () => {
  //   setShowPasswordConfirm(!showPasswordConfirm);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;

    try {
      response = await axios.post("/users", {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        motDePasse: formData.motDePasse,
      });

      console.log("Réponse du serveur :", response.data);

      if (response.data.exists) {
        setErrorMessage("L'adresse e-mail est déjà utilisée.");
        return;
      }

      // Si toutes les vérifications passent, envoyer le formulaire...
    } catch (error) {
      console.error("Erreur lors de la soumission du formulaire :", error);
      setErrorMessage("Une erreur s'est produite. Veuillez réessayer.");
    }

    // Validation des champs...
    const fieldsToCheck = [
      "nom",
      "prenom",
      "email",
      "motDePasse",
      // "confirmationMotDePasse",
    ];
    const emptyFields = fieldsToCheck.filter((field) => !formData[field]);

    let errorMessage = "";

    if (emptyFields.length === 1) {
      errorMessage = `Veuillez remplir le champ suivant : ${emptyFields[0]}`;
    } else if (emptyFields.length > 1) {
      errorMessage = `Veuillez remplir les champs suivants : ${emptyFields.join(", ")}`;
    }

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

    // Vérification de la correspondance des mots de passe
    // if (formData.motDePasse !== formData.confirmationMotDePasse) {
    //   setErrorMessage("Les mots de passe ne correspondent pas.");
    //   return;
    // }
  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-12/12  
        mobile:mb-4 mobile:w-5/5 mobile:justify-center mobile:items-center mobile:h-screen mobile:w-full
         md:text-center md:justify-center md:h-full md:w-5/5 md:mt-16
        lg:h-full lg:w-6/12 lg:mx-auto"
      >
        <h1 className="px-8 text-center text-slate-200 mb-6 font-bold 
        mobile:text-3xl 
        md:text-5xl">Créer un compte</h1>
        {errorMessage && <p className="text-red-500 text-center px-8
         md:text-4xl md:font-bold">{errorMessage}</p>}
        <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center 
              mobile:w-full mobile:mb-4 mobile:mt-6 mobile:h-8 mobile:pl-14 mobile:pr-14 
              md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12
              "
              type="text"
              name="nom"
              placeholder="Nom"
              value={formData.nom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center mobile:w-full mobile:mb-4 mobile:mt-1 mobile:h-8 mobile:pl-14 mobile:pr-14 md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12"
              type="text"
              name="prenom"
              placeholder="Prénom"
              value={formData.prenom}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center mobile:w-full mobile:mb-4 mobile:mt-1 mobile:h-8 mobile:pl-14 mobile:pr-14 md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12"
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container md:px-48 relative">
            <input
              className="bg-orange-100 rounded-md text-center 
              mobile:w-full mobile:pl-14 mobile:pr-14 mobile:h-8 mobile:mt-1 mobile:mb-4 
              md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12 md:pl-3 md:pr-16
              lg:pl-16"
              type={showPassword ? "text" : "password"}
              name="motDePasse"
              placeholder="******"
              value={formData.motDePasse}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute flex justify-center h-full text-zinc-600 font-bold 
              mobile:right-0 mobile:px-4 mobile:h-9 
              md:right-48 md:px-4 md:text-2xl
              lg:h-9 "
            >
              {showPassword ? "Cacher" : "Afficher"}
            </button>
          </div>
        </div>
        {/* <div className="input-group">
          <div className="input-container md:px-48">
            <input
              className="bg-orange-100 rounded-md text-center mobile:w-full mobile:mt-1 mobile:mb-4 mobile:h-8 mobile:pl-14 mobile:pr-14 md:w-full md:mb-4 md:mt-4 md:text-2xl md:h-12 md:pl-3 md:pr-16"
              type={showPasswordConfirm ? "text" : "password"}
              name="confirmationMotDePasse"
              placeholder="******"
              value={formData.confirmationMotDePasse}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={toggleShowPasswordConfirm}
              className="absolute flex justify-center h-full text-zinc-600 font-bold mobile:right-16 mobile:px-4 mobile:h-9 md:right-56 md:px-4 md:text-2xl"
            >
              {showPasswordConfirm ? "Cacher" : "Afficher"}
            </button>
          </div>
        </div> */}
        <div>
          <button
            className="text-slate-200 text-center font-bold rounded-md mt-5 px-8 bg-orange-500
             mobile:w-12/12 mobile:h-9 
             md:text-2xl md:h-12 md:mb-3
             "
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