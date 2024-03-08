import React, { useState } from "react"
import axios from "axios"
import "./RecetteFormulaire.css"

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
                <p className="text-green-500">Le formulaire a été soumis avec succès !</p>
            )}
            {errorMessage && (
                <p className="text-red-500">{errorMessage}</p>
            )}

            
        <form onSubmit={handleSubmit} className=" w-12/12  mobile:mt-0 mt-36 ">
            <div className="text-left mobile:w-full mobile:text-red-400 px-3.5 sm:w-full md:w-full lg:w-full w-full">
                <div className="flex flex-col mb-4 text-lg">
                    <label htmlFor="title">Titre :</label>
                    <input
                        className="border-2 rounded-lg bg-red-100 "
                        type="text"
                        id="title"
                        name="title"
                        value={formData.title}
                        onChange={(e) => handleInputChange(e, null, "title")}
                    />
                </div>
                <input
                    type="file"
                    accept="image/*"
                    capture="environment"
                />

                <div className="flex flex-col mb-4 text-lg">
                    <label htmlFor="description">Description :</label>
                    <textarea
                        className="border-2 rounded-lg bg-red-100  "
                        id="description"
                        name="description"
                        value={formData.description}
                        onChange={(e) => handleInputChange(e, null, "description")}
                    />
                </div>
                <div className="flex flex-col mb-4 ">
                    <label className="text-lg">Ingrédients :</label>
                    {formData.ingredients.map((ingredient, index) => (
                        <div key={index} className="flex ">
                            <input
                                className="border-2 rounded-lg bg-red-100"
                                type="text"
                                placeholder="Quantité"
                                name="quantite"
                                value={ingredient.quantite}
                                onChange={(e) => handleInputChange(e, index, "ingredients")}
                            />
                            <input
                                className="border-2 rounded-lg bg-red-100 ml-2"
                                type="text"
                                placeholder="Nom"
                                name="nom"
                                value={ingredient.nom}
                                onChange={(e) => handleInputChange(e, index, "ingredients")}
                            />
                            <button
                                type="button"
                                className="ml-2 border-2 px-2 py-1 text-slate-100 bg-zinc-950 rounded-lg"
                                onClick={() => handleRemoveField(index, "ingredients")}
                            >
                                -
                            </button>
                            <button
                        type="button"
                        className="border-2 rounded-lg px-2 py-1 text-slate-100 bg-zinc-950"
                        onClick={() => handleAddField("ingredients")}
                    >
                       +
                    </button>
                        </div>
                    ))}
                   
                </div>
                <div className="flex flex-col mb-4">
                    <label className="text-lg">Instructions :</label>
                    {formData.instructions.map((instruction, index) => (
                        <div key={index} className="flex">
                            <input
                                className="border-2 bg-red-100 rounded-lg"
                                type="text"
                                placeholder="Étape"
                                name="etape"
                                value={instruction.etape}
                                onChange={(e) => handleInputChange(e, index, "instructions")}
                            />
                            <button
                                type="button"
                                className="ml-2 border-2 rounded-lg px-2 py-1 text-white bg-zinc-950 "
                                onClick={() => handleRemoveField(index, "instructions")}
                            >
                                -
                            </button>
                            <button
                        type="button"
                        className=" border-2 rounded-lg px-2 py-1 text-white bg-zinc-950 "
                        onClick={() => handleAddField("instructions")}
                    >
                        +
                    </button>
                        </div>
                    ))}
                   
                </div>
                <button
                    className="border-2 rounded-lg px-2 py-2 text-white bg-orange-500 text-base"
                    type="submit"
                >
                    Créer la recette
                </button>
            </div>
        </form>
        </>
    );
}