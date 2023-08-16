import { Type } from "class-transformer";
import { IsString, IsDate, IsNotEmpty } from "class-validator";

export class FlightDTO {
    @IsNotEmpty()
    @IsString()
   readonly pilot: string;
   @IsNotEmpty()
   @IsString()
   readonly airplane: string;
   @IsNotEmpty()
   @IsString()
   readonly destinationCity:string;
   @IsNotEmpty()
   @Type(()=> Date)
   @IsDate()
   readonly flightDate: Date;
  
}