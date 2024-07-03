import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../shared/prisma/prisma.service';
import { RecetteDto } from './dto/recette.dto';
import { UserDto } from './dto/user.dto'
@Injectable()
export class RecetteService {
    constructor(private readonly prisma: PrismaService) {}

    async createRecette(recetteDto: RecetteDto) {
        const { title, description, userId, ingredients, instructions, categorieId } = recetteDto;

        // Créer une recette
        const recette = await this.prisma.recette.create({
            data: {
                title,
                description,
                userId,
                ingredients: {
                    create: ingredients.map(ingredient => ({ nom: ingredient.nom, quantite: ingredient.quantite }))
                },
                instructions: {
                    create: instructions.map(instruction => ({ etape: instruction.etape }))
                },
                categorieId, 
            },
            include: {
                ingredients: true,
                instructions: true,
                categorie: true,
            }
        });

        return recette;
    }

    async getAllRecettes(){
        return this.prisma.recette.findMany();
    }

    async getRecetteByCategorie(){
        return this.prisma.recette.findMany({
            include: {
            categorie : {
                select : {
                    nom: true
                }
            }
            }
        })
    }

    async findAll(){
        return this.prisma.recette.findMany({
          include: {
            ingredients: true,
            instructions: true,
          },
        });
      }

      async getRecetteByUserId(userId: string) {
        const parsedUserId = parseInt(userId, 10);
       const recettesByUser = this.prisma.recette.findMany({
            where: {
                userId: parsedUserId
            },
            
        });
        return recettesByUser
    }

    async getRecetteById(id: string) {
        const recetteId = parseInt(id, 10); 
        const recette = await this.prisma.recette.findUnique({
            where: { id: recetteId },
        });
        if (!recette) {
            throw new NotFoundException(`Recette avec l'ID ${id} introuvable.`);
        }
        return recette;
    }

    async deleteRecetteById(id: string) {

        const recetteId = parseInt(id);
        const recette = await this.prisma.recette.delete({
            where: { id: recetteId},
        })
        return recette
    }

    async updateRecetteById(id: string, recetteDto: RecetteDto) {
        const { title, description, ingredients, instructions } = recetteDto;
        const recetteId = parseInt(id, 10);
    
        const existingRecette = await this.prisma.recette.findUnique({
            where: { id: recetteId },
            include: { ingredients: true, instructions: true }, 
        });
    
        if (!existingRecette) {
            throw new NotFoundException(`Recette avec l'ID ${id} introuvable.`);
        }
    
        const updatedRecette = await this.prisma.recette.update({
            where: { id: recetteId },
            data: {
                title,
                description,
                ingredients: { 
                    updateMany: ingredients.map(ingredient => ({
                        where: { id: ingredient.id },
                        data: { nom: ingredient.nom, quantite: ingredient.quantite }
                    }))
                },
                instructions: {
                    updateMany: instructions.map(instruction => ({
                        where: { id: instruction.id }, 
                        data: { etape: instruction.etape }
                    }))
                }
            },
            include: { ingredients: true, instructions: true }, 
        });
    
        return updatedRecette;
    }
}