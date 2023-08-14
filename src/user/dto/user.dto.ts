import { IsString, IsEmail, IsNotEmpty } from "class-validator";

export class UserDTO extends Document{
    @IsNotEmpty()
    @IsString()
   readonly name: string;
   @IsNotEmpty()
   @IsString()
   readonly username: string;
   @IsNotEmpty()
   @IsEmail()
   readonly email:string;
   @IsNotEmpty()
   @IsString()
   readonly password: string;
}