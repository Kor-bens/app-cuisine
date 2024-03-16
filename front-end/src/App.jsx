import "./App.css";
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Connexion from "./components/Connexion/Connexion";
import AjoutRecette from "./components/AjoutRecette/AjoutRecette";
import ListeRecettes from "./components/ListeRecettes/ListeRecettes";
import FormulaireInscription from "./components/Inscription/Inscription";
import Dashboard from "./components/Dashboard/Dashboard";

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
          <Route path="/mes-recettes" element={<ListeRecettes />} />
          {/* <Route path="/dashboard" element={<Dashboard />} /> */}
          
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
