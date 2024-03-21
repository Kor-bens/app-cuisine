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
  return (
    <>
      <NavBar />
      <div className='grid grid-cols-5 gap-1 text-center h-full'>
      <div className='col-span-0 border flex flex-col rounded-md'>
        <div className="flex flex-col text-slate-50 font-bold">
        <button onClick={toggleShowListRecette}>Afficher mes recettes</button>
        <button onClick={toggleRecetteFormulaire}>Ajouter une recette</button>
        </div>
      </div>
      {showListeRecette && <ListeRecettes />}
      {showRecetteFormulaire && <RecetteFormulaire />}
     </div>
    </>
  );
}
export default MaCuisine;
