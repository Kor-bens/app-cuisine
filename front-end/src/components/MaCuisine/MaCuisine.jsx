import NavBar from "../Dashboard/components/Navbar";
import ListeRecettes from "../ListeRecettes/ListeRecettes";
import { useState } from "react";
import RecetteFormulaire from "../AjoutRecette/RecetteFormulaire";

function MaCuisine() {
  const [showRecetteFormulaire, setShowRecetteFormulaire] = useState(false);
  const [showListeRecette, setShowListeRecette] = useState(true);
  const [showButtonAfficher, setShowButtonAfficher] = useState(false);
  const [showButtonAjouter, setShowButtonAjouter] = useState(true);

  const toggleRecetteFormulaire = () => {
    setShowRecetteFormulaire(!showRecetteFormulaire);
    setShowListeRecette(false);
    setShowButtonAfficher(true);
    setShowButtonAjouter(false);
  };
  
  const toggleShowListRecette = () => {
    setShowListeRecette(!showListeRecette);
    setShowRecetteFormulaire(false);
    setShowButtonAfficher(false);
    setShowButtonAjouter(true);
  };

  // Afficher la liste de recettes par défaut
  return (
    <>
      <div className='grid grid-cols-1 gap-1 text-center h-full
                      mobile:grid-col-1 mobile:grid-rows-0'>
        <div className=' border flex flex-col rounded-md
                       mobile:flex-row mobile:justify-end mobile:row-16 mobile:border-none'>
          <div className="flex flex-col text-slate-50 font-bold
                         ">
            {showButtonAfficher && (
              <button onClick={toggleShowListRecette} className="mobile:border rounded-lg mobile:px-3 mobile:py-1">
                Afficher mes recettes
              </button>
            )}
            {showButtonAjouter && (
              <button onClick={toggleRecetteFormulaire} className="mobile:border rounded-lg mobile:px-3 ">
                Ajouter une recette
              </button>
            )}
          </div>
        </div>
        {showListeRecette && <ListeRecettes />}
        {showRecetteFormulaire && <RecetteFormulaire />}
      </div>
            <NavBar />
    </>
  );
}

export default MaCuisine;
