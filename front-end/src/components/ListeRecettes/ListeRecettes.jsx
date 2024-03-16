import React, { useEffect, useState } from 'react';
import axios from 'axios';
// TODO AFFICHER LA LISTE DES RECETTES PAR UTILISATEUR
export default function ListeRecettes() {
  const [listeRecettes, setListeRecettes] = useState([]);

  useEffect(() => {
    const fetchListeRecettes = async () => {
      try {
        const response = await axios.get('http://localhost:3003/recettes');
        setListeRecettes(response.data);
        console.log(response.data)
      } catch (error) {
        console.error('Erreur lors de la récupération des données :', error);
      }
    };

    fetchListeRecettes();
  }, []);

  return (
    <div>
      {listeRecettes.map((recette, index) => (
        <div key={recette.id} className='border-solid border-2 border-sky-500 mb-2'>
        <h3>Recette {index + 1}</h3>
          <h2>Recette : {recette.title}</h2>
          <p>{recette.description}</p>
          <h3>Ingrédients :</h3>
          <ul>
            {recette.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.nom} - {ingredient.quantite}</li>
            ))}
          </ul>
          <h3>Instructions :</h3>
          <ol>
            {recette.instructions.map((instruction, index) => (
              <li key={index}>{instruction.etape}</li>
            ))}
          </ol>
          <button className='py-1 px-1 border-solid border-1 border-black mr-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-white'>Modifier</button>
          <button className='py-1 px-1 border-solid border-1 border-black rounded-lg bg-red-500 hover:bg-red-700 text-white' >Supprimer</button>
        </div>
      ))}
    </div>
  );
}

