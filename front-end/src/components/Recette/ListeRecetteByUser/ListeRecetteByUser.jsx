import axios from "axios";
import { useEffect, useState } from "react";

function ListeRecetteByUser() {
    const [listeRecettesByUser, setListeRecettesByUser] = useState([])

    useEffect(() => {
        const fetchListeRecettesByUser = async () => {
          try {
            const response = await axios.get("http://localhost:3003/recettes/user");
            setListeRecettesByUser(response.data);
          } catch (error) {
            console.error("Erreur lors de la récupération des données :", error);
          }
        };
    
        fetchListeRecettesByUser();
      }, []);

 const handleRecetteClick = (recette) => {
    setSelectedRecette(recette);
  };

  // return (
  //   <>
  //     <div
  //       className="col-span-1 cursor-pointer border rounded-md h-full
  //              mobile:col-span-2 mobile:h-auto
  //              md:h-auto
  //              lg:h-auto"
  //     >
  //       {listeRecettesByUser.map((recette, index) => ( 
  //         <div
  //           key={recette.id}
  //           className="border-solid border-2 border-gray-500 mb-2  hover:bg-stone-800 hover:opacity-80"
  //           onClick={() => handleRecetteClick(recette)}
  //         >
  //           <h2 className="text-slate-50 font-bold"> {recette.title}</h2>
  //         </div>
  //       ))}
  //     </div>

  //     {selectedRecette && (
  //       <div className="col-span-2 border-solid border mb-2 hover:bg-stone-800 hover:opacity-80 rounded-md">
  //         <h2 className="text-slate-50 font-bold">
  //           Recette : {selectedRecette.title}
  //         </h2>
  //         <p className="text-slate-50 font-bold">
  //           {selectedRecette.description}
  //         </p>
  //         <h3 className="text-slate-50 font-bold">Ingrédients :</h3>
  //         <ul className="text-slate-50 font-bold">
  //           {selectedRecette.ingredients.map((ingredient, index) => (
  //             <li key={index}>
  //               {ingredient.nom} - {ingredient.quantite}
  //             </li>
  //           ))}
  //         </ul>
  //         <h3 className="text-slate-50 font-bold">Instructions :</h3>
  //         <ol className="text-slate-50 font-bold">
  //           {selectedRecette.instructions.map((instruction, index) => (
  //             <li key={index}>{instruction.etape}</li>
  //           ))}
  //         </ol>
  //         <button className="py-1 px-1 border-solid border-1 border-black mr-2 rounded-lg bg-sky-500 hover:bg-sky-700 text-white">
  //           Modifier
  //         </button>
  //         <button className="py-1 px-1 border-solid border-1 border-black rounded-lg bg-red-500 hover:bg-red-700 text-white">
  //           Supprimer
  //         </button>
  //       </div>
  //     )}
  //   </>
  // );
  // return (
  //   <div>
  //     {recettes.map(recette => (
  //       <div key={recette.id}>
  //         <h2>{recette.nom}</h2>
  //         <p>{recette.description}</p>
          
  //       </div>
  //     ))}
  //   </div>
  // );
}
export default ListeRecetteByUser