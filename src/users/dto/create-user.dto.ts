import { IsEmail, IsNotEmpty } from 'class-validator';
export class CreateUserDto {

    name: string;
    
    @IsEmail()
    email: string;

    @IsNotEmpty()
    passwork: string;
}
