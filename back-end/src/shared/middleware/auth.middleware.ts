// import { Injectable, NestMiddleware, Logger } from '@nestjs/common';
// import { Request, Response, NextFunction } from 'express';
// import * as jwt from 'jsonwebtoken';
// import { AuthenticatedRequest } from './authenticatedRequest ';
// import { UserDto } from 'src/recette/dto/user.dto';
// import { tokenEncrypte } from 'src/user/user.service';
// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   private readonly logger = new Logger(AuthMiddleware.name);
//   use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (token) {
//       try {
//         const decodedToken = jwt.verify(token, tokenEncrypte) as UserDto;
//         req.user = decodedToken; // Ajouter les informations de l'utilisateur au req objet
//         this.logger.debug(`User authenticated: ${JSON.stringify(decodedToken)}`);
//       } catch (error) {
//         this.logger.error(`JWT verification failed: ${error.message}`);
//         this.logger.error(`${token} ${error.message}`);
//         // Gérer les erreurs de token JWT, par exemple, token expiré ou invalide
//       }
//     }  else {
//       this.logger.warn('No JWT token found in request, AUTH');
//     }
//     next();
//   }
// }

// @Injectable()
// export class AuthMiddleware implements NestMiddleware {
//   use(req: AuthenticatedRequest, res: Response, next: NextFunction) {
//     const token = req.headers.authorization?.split(' ')[1];
//     if (token) {
//       try {
//         const decodedToken = jwt.verify(token, process.env.JWT_SECRET) as UserDto;
//         req.user = decodedToken; // Ajouter les informations de l'utilisateur au req objet
//         next();
//       } catch (error) {
//         // Gérer les erreurs de token JWT
//         return res.status(401).json({ message: 'Token invalide' });
//       }
//     } else {
//       return res.status(401).json({ message: 'Token manquant' });
//     }
//   }
// }