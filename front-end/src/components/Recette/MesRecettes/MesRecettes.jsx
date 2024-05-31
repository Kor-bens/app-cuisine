import NavBar from "../../common/navbar/Navbar";
import Header from "../../Header";
import ListeRecettes from "../ListeRecettes/ListeRecettes";
import { useState } from "react";
import RecetteFormulaire from "../AjoutRecette/RecetteFormulaire";
import Categories from "./components/Categories";
import RecetteByUser from "../ListeRecetteByUser/ListeRecetteByUser";
import ListeRecetteByUser from "../ListeRecetteByUser/ListeRecetteByUser";

function MesRecettes() {
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
      <Header>
        <p
          className=" italic absolute top-0 left-0 ml-4 mt-12 text-4xl"
          style={{ color: "#8B7979" }}
        >
          Mes recettes
        </p>
      </Header>
      <Categories></Categories>
      <div className='grid grid-cols-1 gap-1 text-center h-full 
                      mobile:grid-col-1 mobile:grid-rows-0'>
        <div className=' border flex flex-col rounded-md 
                       mobile:flex-row mobile:justify-end mobile:row-16 mobile:border-none'>
          <div className="flex flex-col text-slate-50 font-bold ">
            {showButtonAfficher && (
              <button onClick={toggleShowListRecette} className="bg-gray-200 italic 
              mobile:border rounded-lg mobile:px-3 "
              style={{ color: "#8B7979" }}>
                Afficher mes recettes
              </button>
            )}
            {showButtonAjouter && (
              <button onClick={toggleRecetteFormulaire} className="bg-gray-200 italic
              mobile:border rounded-lg mobile:px-3 "
              style={{ color: "#8B7979" }}>
                Ajouter une recette
              </button>
            )}
          </div>
        </div>
        
        {/* {showListeRecette && (
          <div style={{ marginTop: '20px' }}>
            {<ListeRecettes />}
          </div>
        )} */}
        {showListeRecette && (
          <div style={{ marginTop: '20px' }}>
            {<ListeRecetteByUser />}
          </div>
        )}
        {showRecetteFormulaire && <RecetteFormulaire />}
      </div>
            <NavBar />

    </>
  );
}

export default MesRecettes;
