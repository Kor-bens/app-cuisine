import { IngredientDto } from "./ingredient.dto";
import { InstructionDto } from "./instruction.dto";

export interface RecetteDto {
  title: string;
  description: string;
  userId: number;
  ingredients: IngredientDto[];
  instructions: InstructionDto[];
  sousCategorieId: number;
  }
  
  
  
 