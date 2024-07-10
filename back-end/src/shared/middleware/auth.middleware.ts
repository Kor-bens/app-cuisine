import { Injectable, NestMiddleware } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import * as jwt from 'jsonwebtoken';
import { tokenEncrypte } from 'src/shared/utils';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
      return res.status(401).json({ message: 'Non authentifié' });
    }

    const token = authHeader.split(' ')[1];

    try {
      const decoded = jwt.verify(token, tokenEncrypte);
      req['user'] = decoded;
      next();
    } catch (error) {
      return res.status(403).json({ message: 'Token invalide' });
    }
  }
}
