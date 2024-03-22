import NavBar from "../Dashboard/components/Navbar";
import ListeRecettes from "../ListeRecettes/ListeRecettes";
import { Link } from "react-router-dom";
import { useState } from "react";
import RecetteFormulaire from "../AjoutRecette/RecetteFormulaire";

function MaCuisine() {
  const [showRecetteFormulaire, setShowRecetteFormulaire] = useState(false);
    const [showListeRecette, setShowListeRecette] = useState(false);

    const toggleRecetteFormulaire = () => {
      setShowRecetteFormulaire(!showRecetteFormulaire);
      setShowListeRecette(false)
  };
  
  const toggleShowListRecette = () => {
      setShowListeRecette(!showListeRecette);
      setShowRecetteFormulaire(false)
  };
  //TODO styliser l'affichage des boutons et des composants 
  return (
    <>
      <NavBar />
      <div className='grid grid-cols-5 gap-1 text-center h-full
                      mobile:grid-col-1 grid-rows-1'>
      <div className='col-span-0 border flex flex-col rounded-md
                      mobile:col-span-5 mobile:row-16 mobile:border-none'>
        <div className="flex flex-col text-slate-50 font-bold
                       mobile:flex-row mobile:justify-around ">
        <button onClick={toggleShowListRecette} className="mobile:border rounded-lg mobile:px-3 mobile:py-1">Afficher mes recettes</button>
        <button onClick={toggleRecetteFormulaire} className="mobile:border rounded-lg mobile:px-3 mobile:py-1">Ajouter une recette</button>
        </div>
      </div>
      {showListeRecette && <ListeRecettes />}
      {showRecetteFormulaire && <RecetteFormulaire />}
     </div>
    </>
  );
}
export default MaCuisine;
