import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/shared/prisma/prisma.service';
import { CreateUserDto } from './dto/user.dto';
import * as bcrypt from 'bcrypt';
import { LoginUserDto } from './dto/loginUser.dto';
import * as jwt from 'jsonwebtoken';
import { tokenEncrypte } from 'src/shared/utils';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(createUserDto: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(createUserDto.motDePasse, 10);

    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: createUserDto.email,
      },
    });

    // Si un utilisateur avec la même adresse e-mail est trouvé, renvoyer une erreur
    if (existingUser) {
      throw new Error("L'adresse e-mail est déjà utilisée.");
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
    const { nomOrEmail, motDePasse } = loginUserDto;
    // const crypto = require('crypto');
    // const tokenEncrypte = crypto.randomBytes(32).toString('hex');
    // Vérifier si l'identifiant de l'utilisateur est un email ou un nom d'utilisateur
    const user = await this.prisma.user.findFirst({
      where: {
        OR: [{ email: nomOrEmail }, { nom: nomOrEmail }],
      },
    });

    if (!user) {
      throw new Error("Identifiant incorrect.");
    }

    // Vérifier le mot de passe
    const isPasswordValid = await bcrypt.compare(motDePasse, user.motDePasse);

    if (!isPasswordValid) {
      throw new Error("Mot de passe incorrect.");
    }
    const token = jwt.sign({ userId: user.id }, tokenEncrypte, {
        algorithm: 'HS256',
        expiresIn: '1min',
    });

    return {successMessage: 'Connexion réussie!', token, userName: user.nom, userId: user.id }; // Retourne le jeton d'authentification et le nom

  }
  
}

