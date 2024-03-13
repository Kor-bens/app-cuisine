import { IngredientDto } from "./ingredient.dto";
import { InstructionDto } from "./instruction.dto";

export interface RecetteDto {
    title: string;
    description: string;
    ingredients: IngredientDto[];
    instructions: InstructionDto[];
    userId: number;
  }
  
  
  
 