import { IsNotEmpty, IsEmail, MinLength, IsString } from "class-validator";

export class CreateUserDto {
@IsNotEmpty()
@IsString()
nom: string;

@IsNotEmpty()
@IsString()
prenom: string;

@IsEmail()
email: string;

@IsNotEmpty()
// @MinLength(6)
@IsString()
motDePasse: string;
}

