import { Body,Param, Controller, Post, Get,Put,Delete, HttpStatus, HttpException } from '@nestjs/common';
import { FlightService } from './flight.service';
import { FlightDTO } from './dto/flight.dto';
import { PassengerService } from 'src/passenger/passenger.service';
import { ApiTags,ApiOperation } from '@nestjs/swagger';

@ApiTags('flights')
@Controller('api/v1/flight')
export class FlightController {
    constructor(private readonly flightService : FlightService,private readonly passengerService : PassengerService){}

    @Post()
    @ApiOperation({summary: 'Create Flight'})
    create(@Body() flightDTO:FlightDTO){
        return this.flightService.create(flightDTO)
    }

    @Get()
    @ApiOperation({summary: 'Find All Flight'})
    findAll(){
        return this.flightService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Find One Flight'})
    findOne(@Param('id') id:string){
        return this.flightService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update Flight'})
    update(@Param('id') id: string, @Body() flightDTO:FlightDTO){
        return this.flightService.update(id,flightDTO);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete Flight'})
    delete(@Param('id') id:string){
        return this.flightService.delete(id);
    }

    @Post(':flightId/passenger/:passengerId')
    @ApiOperation({summary: 'Add Passenger the Flight'})
        async addPassenger(@Param('flightId') flightId:string,@Param('passengerId') passengerId:string){
            const passenger = await this.passengerService.findOne(passengerId);
            if(!passenger) throw new HttpException('Passenger Not Found',HttpStatus.NOT_FOUND );

            return this.flightService.addPassenger(flightId,passengerId);
        }
    
}
