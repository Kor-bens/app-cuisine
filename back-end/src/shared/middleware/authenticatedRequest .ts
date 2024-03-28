import { Request } from 'express';
import { UserDto } from 'src/recette/dto/user.dto';

export interface AuthenticatedRequest extends Request {
  user?: UserDto;
}