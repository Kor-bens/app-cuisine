import { Request } from 'express';
import { UserDto } from 'src/recette/dto/user.dto';
import { CreateUserDto } from 'src/user/dto/user.dto';

export interface AuthenticatedRequest extends Request {
  user?: UserDto;
}