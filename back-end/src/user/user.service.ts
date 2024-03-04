import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from './user.dto';
import * as bcrypt from 'bcrypt';

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
}