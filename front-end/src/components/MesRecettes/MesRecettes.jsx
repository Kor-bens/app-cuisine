import NavBar from "../common/navbar/Navbar";
import Header from "../Header"
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
    <Header><p className=" italic
    mobile:absolute mobile:top-0 mobile:left-0 mobile:ml-4 mobile:mt-12 mobile:text-4xl " style={{ color: '#8B7979' }}>Mes recettes</p></Header>
      {/* <div className='grid grid-cols-1 gap-1 text-center h-full 
                      mobile:grid-col-1 mobile:grid-rows-0'>
        <div className=' border flex flex-col rounded-md
                       mobile:flex-row mobile:justify-end mobile:row-16 mobile:border-none'>
          <div className="flex flex-col text-slate-50 font-bold">
            {showButtonAfficher && (
              <button onClick={toggleShowListRecette} className="mobile:border rounded-lg mobile:px-3 ">
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
        
        {showListeRecette && (
          <div style={{ marginTop: '20px' }}>
            <ListeRecettes/>
          </div>
        )}
        {showRecetteFormulaire && <RecetteFormulaire />}
      </div> */}
      <NavBar />
    </>
  );
}

export default MaCuisine;