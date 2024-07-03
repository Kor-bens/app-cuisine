import React, { useState } from "react";
import axios from "axios";
import "./inscription.css";
import NavBar from "../common/navbar/Navbar";
import backgroundImage from "../../assets/background/bg.jpg";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";


function FormulaireInscription() {
  const styles = {
    backgroundImage: `url(${backgroundImage})`,
  };
  const [formData, setFormData] = useState({
    nom: "",
    prenom: "",
    email: "",
    motDePasse: "",
  });

  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setShowPassword(!showPassword);
  };

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
      response = await axios.post("http://localhost:3003/users", {
        nom: formData.nom,
        prenom: formData.prenom,
        email: formData.email,
        motDePasse: formData.motDePasse,
      });

      console.log("Réponse du serveur :", response.data);
      
      setErrorMessage("");
      if (response.data.existingUser) {
        setErrorMessage("L'adresse e-mail est déjà utilisée.");
      } else {
        // setRedirectToDashboard(true)
      }
      
      if(response.data.message){
        setErrorMessage(response.data.message);
        setSuccessMessage(response.data.SuccessMessage);
      }else{
        setSuccessMessage("Inscription réussie")
      }
      // Si toutes les vérifications passent, envoyer le formulaire...
    } catch (error) {
      console.log("Erreur lors de la soumission du formulaire :", error);
      setErrorMessage(
        error.response?.data?.message || "Une erreur s'est produite"
      );
      console.log()
      setSuccessMessage(setErrorMessage(
        error.response?.data?.message || "Une erreur s'est produite"
      )); // Réinitialiser le message de réussite
    }

    // Validation des champs...
    const fieldsToCheck = [
      "nom",
      "prenom",
      "email",
      "motDePasse",
    ];
    const emptyFields = fieldsToCheck.filter((field) => !formData[field]);

    let errorMessage = "";
    let successMessage= "";

    if (emptyFields.length === 1) {
      errorMessage = `Veuillez remplir le champ suivant : ${emptyFields[0]}`;
    } else if (emptyFields.length > 1) {
      errorMessage = `Veuillez remplir les champs suivants : ${emptyFields.join(
        ", "
      )}`;
    }
    if (successMessage) {
      setSuccessMessage(successMessage);
      return;
    }

    if (errorMessage) {
      setErrorMessage(errorMessage);
      return;
    }

  };

  return (
    <>
      <NavBar />
      <form
        onSubmit={handleSubmit}
        className="flex flex-col w-12/12 mx-auto
        mobile:mb-4 mobile:w-5/5 mobile:justify-center mobile:items-center mobile:h-screen mobile:w-full
         md:text-center md:justify-center md:h-full md:w-5/5 md:mt-16
        lg:h-full lg:w-6/12 lg:mx-auto"
      >
        <h1
          className="px-8 text-center text-slate-500 mb-6 font-bold 
        mobile:text-3xl 
        md:text-5xl"
        >
          Créer un compte
        </h1>
        {errorMessage && (
          <p
            className="text-red-700 text-center px-8 text-3xl font-bold
            mobile:text-lg
         md:text-4xl md:font-bold
         lg:text-2xl"
          >
            {errorMessage}
          </p>
        )}
        {successMessage && (
          <p
            className="text-green-700 text-center text-3xl font-bold
            mobile:text-lg
            md:text-4xl md:font-bold
            lg:text-2xl
         "
          >
            {successMessage}
          </p>
        )}
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
              className="bg-orange-100 rounded-md text-center items-center
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
              className="absolute flex justify-center text-zinc-600 font-bold items-center
              mobile:right-0 mobile:px-4 py-10
              md:right-48 md:px-4 md:text-2xl
              lg:items-center"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
          <button
            className="w-4/12 mx-auto text-slate-200 text-center font-bold rounded-md mt-5 px-8 bg-orange-500 hover:bg-orange-700 
             mobile:w-5/12 mobile:h-8 
             md:text-2xl md:h-12 md:mb-3
             "
            type="submit"
          >
            S'inscrire
          </button>
        <p className="text-slate-500 font-bold mobile:px-12 text-center">
          Vous avez un compte ?   
           <Link to="/connexion" className=" underline decoration-1 hover:text-slate-300"> Connectez-vous</Link> </p>
      </form>
    </>
  );
}
export default FormulaireInscription;
