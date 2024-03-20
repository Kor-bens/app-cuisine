import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './user.dto';
import { LoginUserDto } from './loginUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return { message: 'Inscription réussie!', user: newUser };
  } catch (error) {
      return { message: error.message }; // Retourner le message d'erreur
  }
}

@Post('connexion') 
async connectUser(@Body() loginUserDto: LoginUserDto) {
  try {
    
    const user = await this.userService.connectUser(loginUserDto);
    if (!user) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect.');
    }
    
    return { message: 'Connexion réussie!', user };
  } catch (error) {
    return { message: error.message }; // Retourner le message d'erreur
  }
}
}
