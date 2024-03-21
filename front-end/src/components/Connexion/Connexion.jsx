import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import NavBar from "../common/navbar/Navbar";
import { Link } from "react-router-dom";
import axios from "axios";
import "./connexion.css";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";


export default function Connexion() {
  
  const [formData, setFormData] = useState({
    nomOrEmail: "",
    motDePasse: "",
  })
  const [errorMessage, setErrorMessage] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [redirectToDashboard, setRedirectToDashboard] = useState(false);
  const navigate = useNavigate();

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
  
  useEffect(() => {
    if (redirectToDashboard) {
      navigate("/dashboard");
    }
  }, [redirectToDashboard, navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    let response;

    try {
      response = await axios.post("http://localhost:3003/users/connexion", {
        nomOrEmail: formData.nomOrEmail,
        motDePasse: formData.motDePasse,
      });

      console.log("Réponse du serveur :", response.data);
      setErrorMessage("");
      
      // Validation des champs...
    const fieldsToCheck = [
      "",
      "",
    ];
    const emptyFields = fieldsToCheck.filter((field) => !formData[field]);

    let errorMessage = "";

    if (emptyFields.length === 1) {
      errorMessage = `Veuillez remplir le champ vide`;
    } else if (emptyFields.length > 1) {
      errorMessage = `Veuillez remplir les champs vides`;
    }
      if(response.data.message){
        setErrorMessage(response.data.message);
        setSuccessMessage(response.data.SuccessMessage);
      }else{
        setSuccessMessage("Inscription réussie")

        localStorage.setItem('token', response.data.token);
        console.log("Token enregistré :", response.data.token);
        console.log("Réponse complète du serveur :", response);
        setRedirectToDashboard(true);
      }

      // Si toutes les vérifications passent, envoyer le formulaire...
    } catch (error) {
      console.log("Erreur lors de la soumission du formulaire :", error);
      setErrorMessage(
        error.response.data.message || "Une erreur s'est produite"
      );
      console.log(setErrorMessage(
        error.response.data.message || "Une erreur s'est produite"
      ))
      setSuccessMessage(""); // Réinitialiser le message de réussite
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
              md:w-full md:mb-2 md:mt-6 md:text-2xl md:h-12
              "
              type="text"
              placeholder="Nom ou adresse mail"
              name="nomOrEmail"
              value={formData.nomOrEmail}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="input-group">
          <div className="input-container md:px-48 relative">
            <input
              className="bg-orange-100 rounded-md text-center 
              mobile:w-full mobile:mb-0 mobile:mt-0 mobile:h-8 mobile:pl-14 mobile:pr-14 
              md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12
              "
              type={showPassword ? "text" : "password"}
              placeholder="*******"
              name="motDePasse"
              value={formData.motDePasse}
              onChange={handleChange}
            />
            <button
              type="button"
              onClick={toggleShowPassword}
              className="absolute flex justify-center text-zinc-600 font-bold items-center
              mobile:right-0 mobile:px-4 mobile:h-9 
              md:right-48 md:px-4 md:text-2xl
              lg:items-center"
            >
              {showPassword ? <FaRegEyeSlash /> : <FaRegEye />}
            </button>
          </div>
        </div>
        <button
          className="w-4/12 mx-auto text-slate-200 text-center font-bold rounded-md mt-5 px-8 bg-orange-500 hover:bg-orange-700
             mobile:w-12/12 mobile:h-9 mobile:w-6/12 mobile:mb-3
             md:text-2xl md:h-12 md:mb-3
             "
          type="submit"
        >
          Se connecter
        </button>

        <p className="text-slate-200 font-bold mobile:px-12 text-center">
          Vous n'avez pas de compte ? 
          <Link to="/inscription" className=" underline decoration-1 hover:text-slate-300">Inscrivez-vous</Link> </p>
              </form>

    </>
  );
}
