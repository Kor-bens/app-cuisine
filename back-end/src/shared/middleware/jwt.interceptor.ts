import { Injectable, NestInterceptor, ExecutionContext, CallHandler, Logger, BadRequestException } from '@nestjs/common';
import { Observable } from 'rxjs';
import * as jwt from 'jsonwebtoken';
import { tokenEncrypte } from 'src/user/user.service';

@Injectable()
export class JwtInterceptor implements NestInterceptor {
    private readonly logger = new Logger(JwtInterceptor.name);
  
    intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
        const request = context.switchToHttp().getRequest();
        const token = request.headers.authorization?.split(' ')[1];

        if (token) {
            try {
                const decodedToken = jwt.verify(token, tokenEncrypte);
                // Ajouter les informations du token à la requête
                request.user = decodedToken;
                this.logger.debug(`User authenticated: ${JSON.stringify(decodedToken)}`);
            } catch (error) {
                this.logger.error(`JWT verification failed: ${error.message} + token: ${token}`);
                throw new BadRequestException('Token JWT invalide');
            }
        }

        return next.handle();
    }
}