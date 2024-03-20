import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './loginUser.dto';
@Injectable()
export class UserService {
    constructor(private readonly prisma: PrismaService) {}

    async createUser(createUserDto: CreateUserDto){
        const hashedPassword = await bcrypt.hash(createUserDto.motDePasse, 10);

        const existingUser = await this.prisma.user.findUnique({
            where: {
                email: createUserDto.email,
            },
        });
        
        // Si un utilisateur avec la même adresse e-mail est trouvé, renvoyer une erreur
        if (existingUser) {
            throw new Error('L\'adresse e-mail est déjà utilisée.');
        }

        return this.prisma.user.create({
            data: {
                nom: createUserDto.nom,
                prenom: createUserDto.prenom,
                email: createUserDto.email,
                motDePasse: hashedPassword,
            },
        });
    }

    async connectUser(loginUserDto: LoginUserDto) {
        const { usernameOrEmail, password } = loginUserDto;
        
        // Vérifier si l'identifiant de l'utilisateur est un email ou un nom d'utilisateur
        const user = await this.prisma.user.findFirst({
          where: {
            OR: [
              { email: usernameOrEmail },
              { nom: usernameOrEmail },
            ],
          },
        });
    
        if (!user) {
          return null; // Aucun utilisateur trouvé
        }
    
        // Vérifier le mot de passe
        const isPasswordValid = await bcrypt.compare(password, user.motDePasse);
    
        if (!isPasswordValid) {
          return null; // Mot de passe incorrect
        }
    
        return user; // Retourner l'utilisateur s'il est trouvé et que le mot de passe est valide
      }
}