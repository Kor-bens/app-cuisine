import { IsNotEmpty } from 'class-validator';

export class LoginUserDto {
  @IsNotEmpty()
  nomOrEmail: string; 

  @IsNotEmpty()
  motDePasse: string; 
}