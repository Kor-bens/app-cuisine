import { Post, Controller, Body, Get, NotFoundException, Param, Delete, Put, Request, UseGuards  } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { RecetteDto } from './dto/recette.dto';
import { UserDto } from './dto/user.dto';

@Controller('recettes')
export class RecetteController {
    constructor(private readonly recetteService: RecetteService) {}

    @Post()
    async createRecette(@Body() recetteDto: RecetteDto,
                        ) {
        return this.recetteService.createRecette(recetteDto);
    }

    @Get('categorie')
    async getRecetteByCategorie() {
      return this.recetteService.getRecetteByCategorie();
    }

    @Get()
    async getRecette() {
        return this.recetteService.findAll();
    }

    // @Get(':id')
    // async getRecetteById(@Param('id') id: string) {
    //     const recette = await this.recetteService.getRecetteById(id);
    //     if (!recette) {
    //         throw new NotFoundException(`Recette avec l'ID ${id} introuvable.`);
    //     }
    //     return recette;
    // }

    //TODO Récuperation des recettes de l'user 
    @Get('user')
    // @UseGuards(AuthGuard)
    async getRecettesByLoggedInUser(@Request() req) {
      const userId = req.user?.userId; // Obtenir l'identifiant de l'utilisateur connecté à partir du req objet
      if (userId) {
        return this.recetteService.getRecetteByUserId(userId);
      } else {
        return { message: 'Utilisateur non authentifié.' };
      }
    }

    @Get('user/:userId')
    async getRecetteByUser(@Param('userId') userId: string) {
      return this.recetteService.getRecetteByUserId(userId) 
    }

    @Delete(':id')
    async deleteRecetteById(@Param('id') id: string) {
        const recette = await this.recetteService.deleteRecetteById(id);
        if(!recette) {
            throw new NotFoundException(`Recette avec l'Id ${id} introuvable.`)
        } else {
            'recette supprimé'
        }

        return recette
    }

    @Put(':id')
    async updateRecetteById(@Param('id') id: string, @Body() recetteDto: RecetteDto) {
        return this.recetteService.updateRecetteById(id, recetteDto);
    }

}







// @Get('feed')
//   async getPublishedPosts(): Promise<PostModel[]> {
//     return this.postService.posts({
//       where: { published: true },
//     });
//   }