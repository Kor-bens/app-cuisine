import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { AuthenticatedRequest } from './authenticatedRequest ';
import { UserDto } from 'src/recette/dto/user.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    const token = req.headers.authorization?.split(' ')[1];
    if (token) {
      try {
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as UserDto;
        req.user = decodedToken; // Ajouter les informations de l'utilisateur au req objet
      } catch (error) {
        // Gérer les erreurs de token JWT, par exemple, token expiré ou invalide
      }
    }
    next();
  }
}