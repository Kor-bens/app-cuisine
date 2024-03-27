import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Connexion from "./components/Connexion/Connexion";
import AjoutRecette from "./components/Recette/AjoutRecette/AjoutRecette";
import ListeRecettes from "./components/Recette/ListeRecettes/ListeRecettes";
import FormulaireInscription from "./components/Inscription/Inscription";
import Dashboard from "./components/Dashboard/Dashboard";
import MesRecettes from "./components/Recette/MesRecettes/MesRecettes";
//TODO ROUTE ACCESSIBLE SEULEMENT POUR LES CONNECTER : DASHBOARD, MA CUISINE
//TODO DECONNEXION + TIMER DECONNEXION
//TODO BOUTON "+" POUR L'AJOUT DE RECETTE
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil />} />
          <Route path="/ajout" element={<AjoutRecette />} />
          <Route path="/inscription" element={<FormulaireInscription />} />
          <Route path="/connexion" element={<Connexion />} />
          <Route path="/mes-recettes" element={<MesRecettes />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/mes-recettes-categories" element={<MesRecettes />} />
          {/* <Route path="/mes-recettes" element={<MesRecettes />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
