import { CategorieDto } from "./categorie.dto";

export interface SousCategorieDto {
    id: number;
    nom: string;
    categorie: CategorieDto;
}