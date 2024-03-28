import { Controller, Post, Body } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/user.dto';
import { LoginUserDto } from './dto/loginUser.dto';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() createUserDto: CreateUserDto) {
    try {
      const newUser = await this.userService.createUser(createUserDto);
      return { SuccessMessage: 'Inscription réussie !', user: newUser };
    } catch (error) {
      return { message: error.message }; // Retourner le message d'erreur
    }
  }

  @Post('connexion')
  async connectUser(@Body() loginUserDto: LoginUserDto) {
    try {
      const result = await this.userService.connectUser(loginUserDto);
      return result;
    } catch (error) {
      return { message: error.message }; // Retourner le message d'erreur
    }
  }
}
