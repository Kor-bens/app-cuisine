import "./App.css";
import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Accueil from "./components/Accueil/Accueil";
import Connexion from "./components/Connexion/Connexion";
import AjoutRecette from "./components/Recette/AjoutRecette/AjoutRecette";
import ListeRecettes from "./components/Recette/ListeRecettes/ListeRecettes";
import FormulaireInscription from "./components/Inscription/Inscription";
import Dashboard from "./components/Dashboard/Dashboard";
import MesRecettes from "./components/Recette/MesRecettes/MesRecettes";
import NavBar from "./components/common/navbar/Navbar";

//TODO ROUTE ACCESSIBLE SEULEMENT POUR LES CONNECTER : DASHBOARD, MA CUISINE
//TODO DECONNEXION + TIMER DECONNEXION
//TODO BOUTON "+" POUR L'AJOUT DE RECETTE
//TODO AFFICHAGE USERNAME DANS DASHBOARD et accueil
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  useEffect(() => {
    const token = localStorage.getItem("token");
    const storedUserName = localStorage.getItem("userName");
    if (token && storedUserName) {
      setIsAuthenticated(false);
      setUserName(storedUserName);
    }
  }, []);

  return (
    <BrowserRouter>
      <NavBar isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} userName={userName} />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/accueil" element={<Accueil userName={userName} />} />
        <Route path="/ajout" element={<AjoutRecette />} />
        <Route path="/inscription" element={isAuthenticated ? <Dashboard /> : <FormulaireInscription />} />
        <Route path="/connexion" element={isAuthenticated ? <Dashboard userName={userName} /> : <Connexion setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />} />
        <Route path="/mes-recettes" element={isAuthenticated ? <MesRecettes userName={userName} /> : <Connexion />} />
        <Route path="/dashboard" element={isAuthenticated ? <Dashboard userName={userName} /> : <Connexion />} />
        <Route path="/mes-recettes-categories" element={<MesRecettes userName={userName} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
