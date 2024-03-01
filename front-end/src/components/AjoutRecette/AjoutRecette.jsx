import NavBar from "../common/navbar/Navbar";
import RecetteFormulaire from "./RecetteFormulaire";


export default function AjoutRecette(){
    return ( 
<>
<h1 className="font-mono mt-4 text-center mobile:text-red-400">Nouvelle recette</h1>
<RecetteFormulaire />
<NavBar/>
</>
    )
}