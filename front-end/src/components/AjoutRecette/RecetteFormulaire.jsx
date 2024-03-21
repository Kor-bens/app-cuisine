import React, { useState } from "react"
import axios from "axios"
import "./RecetteFormulaire.css"
// TODO STYLE ET AJOUT DE RECETTE PAR USERS
export default function RecetteFormulaire() {
    const [formData, setFormData] = useState({
        title: "",
        description: "",
        ingredients: [{ quantite: "", nom: "" }],
        instructions: [{ etape: "" }],
    });
    
    const [submitted, setSubmitted] = useState();
    const [errorMessage, setErrorMessage] = useState("");

    const handleInputChange = (e, index, type) => {
        const { name, value } = e.target;
        if (type === 'title' || type === 'description') {
            // Si le champ est title ou description, on met à jour directement le state
            setFormData({
                ...formData,
                [type]: value,
            });
        } else {
            // Sinon, on met à jour le tableau correspondant
            const newData = formData[type].map((item, i) =>
                i === index ? { ...item, [name]: value } : item
            );
            setFormData({
                ...formData,
                [type]: newData,
            });
        }
    };

    const handleAddField = (type) => {
        setFormData({
            ...formData,
            [type]: [...formData[type], {}],
        });
    };

    const handleRemoveField = (index, type) => {
        const newData = formData[type].filter((item, i) => i !== index);
        setFormData({
            ...formData,
            [type]: newData,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try { 
            const response = await axios.post("http://localhost:3003/recettes", {
                title: formData.title,
                description: formData.description,
                ingredients: formData.ingredients,
                instructions: formData.instructions,
            });
            console.log("Données du formulaire soumis :", formData);
            console.log(response.data);
            setSubmitted(true);
            setErrorMessage("");
        } catch (error) {
            console.error("Erreur lors de l'envoi du formulaire :", error);
            setSubmitted(false);
            setErrorMessage("Une erreur s'est produite lors de la soumission du formulaire.");
        }
    };

   

    return (
        <>
       {submitted && (
                <p className="text-green-500 md:text-4xl md:font-bold">Le formulaire a été soumis avec succès !</p>
            )}
            {errorMessage && (
                <p className="text-red-500 md:text-4xl md:font-bold md:text-center">{errorMessage}</p>
            )}

        <form onSubmit={handleSubmit} className=" col-span-2 cursor-pointer border rounded-md w-5/5 mt-96 
        mobile:mb-4 mobile:w-5/5 mobile:justify-center mobile:items-center mobile:h-screen mobile:w-full mobile:px-8
         md:text-center md:w-5/5 md:mt-16
         lg:w-12/12 lg:mx-auto lg:mt-0">
       
            <div className="flex flex-col w-5/5 px-8 
        mobile:mb-4 mobile:w-5/5 mobile:justify-center mobile:items-center mobile:h-screen mobile:w-full
         md:text-center md:justify-center md:h-full md:w-5/5 md:mt-16 md:w-full
         lg:mt-0
         ">
                 <h1 className="font-mono px-8  text-center text-slate-200 mb-6 font-bold
                                mobile:text-3xl 
                                md:text-5xl">Nouvelle recette</h1>
                <div className="flex flex-col text-lg">
                    <input
                        className="bg-orange-100 rounded-md text-center
                         mobile:w-full  mobile:h-8 mobile:pl-14 mobile:pr-14
                          md:w-full  md:text-2xl md:h-12 md:pl-14 md:pr-14"
                        type="text"
                        id="title"
                        name="title"
                        placeholder="Titre"
                        value={formData.title}
                        onChange={(e) => handleInputChange(e, null, "title")}
                    />
                </div>
                {/* <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                /> */}

                <div className="flex flex-col text-lg">
                    <textarea
                        className="bg-orange-100 rounded-md text-center
                        mobile:w-full mobile:mb-4 mobile:mt-6 mobile:h-8 mobile:pl-14 mobile:pr-14
                         md:w-full md:mb-4 md:mt-6 md:text-2xl md:h-12"
                        id="description"
                        name="description"
                        placeholder="Description"
                        value={formData.description}
                        onChange={(e) => handleInputChange(e, null, "description")}
                    />
                </div>
                <div className="flex flex-col items-center py-2">
                    {formData.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex ">
                            <input
                                className="bg-orange-100 rounded-md text-center
                                mobile:w-full  mobile:h-8 
                                 md:w-full md:text-2xl md:h-12"
                                type="text"
                                placeholder="Quantité"
                                name="quantite"
                                value={ingredient.quantite}
                                onChange={(e) => handleInputChange(e, index, "ingredients")}
                            />
                            <input
                                className="bg-orange-100 rounded-md text-center
                                mobile:w-full  mobile:h-8 mobile:pl-14 mobile:pr-14
                                 md:w-full md:text-2xl md:h-12"
                                type="text"
                                placeholder="Nom"
                                name="nom"
                                value={ingredient.nom}
                                onChange={(e) => handleInputChange(e, index, "ingredients")}
                            />
                            <button
                                type="button"
                                className="ml-2 border-2 px-2  text-slate-100 bg-zinc-950 rounded-lg"
                                onClick={() => handleRemoveField(index, "ingredients")}
                            >
                                -
                            </button>
                            <button
                        type="button"
                        className="border-2 rounded-lg px-2  text-slate-100 bg-zinc-950"
                        onClick={() => handleAddField("ingredients")}
                    >
                       +
                    </button>
                        </div>
                    ))}
                   
                </div>
                <div className="flex flex-col items-center py-2 ">
                    {formData.instructions.map((instruction, index) => (
                        <div key={index} className="flex">
                            <input
                                className="bg-orange-100 rounded-md text-center
                                mobile:w-full  mobile:h-8 mobile:pl-14 mobile:pr-14
                                 md:w-full md:text-2xl md:h-12 md:pl-36 md:pr-36"
                                type="text"
                                placeholder="Étape"
                                name="etape"
                                value={instruction.etape}
                                onChange={(e) => handleInputChange(e, index, "instructions")}
                            />
                            <button
                                type="button"
                                className="ml-2 border-2 rounded-md px-2  text-white bg-zinc-950"
                                onClick={() => handleRemoveField(index, "instructions")}
                            >
                                -
                            </button>
                            <button
                        type="button"
                        className=" border-2 rounded-md px-2   text-white bg-zinc-950"
                        onClick={() => handleAddField("instructions")}
                    >
                        +
                    </button>
                        </div>
                    ))}
                   
                </div>
                <button
                    className="border-2 rounded-lg px-2 py-2 text-white bg-orange-500 text-base hover:bg-orange-700
                    lg:w-5/12 lg:mx-auto lg:mt-4"
                    type="submit"
                >
                    Créer la recette
                </button>
            </div>
        </form>
        </>
    );
}