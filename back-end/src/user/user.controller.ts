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
    // Appelez une fonction dans le service user pour gérer la connexion de l'utilisateur
    const user = await this.userService.connectUser(loginUserDto);
    if (!user) {
      throw new Error('Nom d\'utilisateur ou mot de passe incorrect.');
    }
    // Si l'utilisateur est trouvé, vous pouvez retourner un message de succès ou l'utilisateur lui-même
    return { message: 'Connexion réussie!', user };
  } catch (error) {
    return { message: error.message }; // Retourner le message d'erreur
  }
}
}
