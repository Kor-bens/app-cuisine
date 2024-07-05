import "./App.css";
import React, {useState} from "react";
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
//TODO AFFICHAGE USERNAME DANS DASHBOARD et accueil
function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [userName, setUserName] = useState("");
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/accueil" element={<Accueil userName={userName} />} />
          <Route path="/ajout" element={<AjoutRecette />} />
          <Route path="/inscription" element={isAuthenticated ? <Dashboard /> : <FormulaireInscription />} />
          <Route path="/connexion" element={isAuthenticated ? <Dashboard /> : <Connexion setUserName={setUserName} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/mes-recettes" element={<MesRecettes userName={userName}/>} />
          <Route path="/dashboard" element={<Dashboard userName={userName} />} />
          <Route path="/mes-recettes-categories" element={<MesRecettes userName={userName}/>} />
          {/* <Route path="/mes-recettes" element={<MesRecettes />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
