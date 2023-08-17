import { UserService } from './user.service';
import { Controller, Post,Get,Put,Delete, Body, Param, UseGuards } from '@nestjs/common';
import { UserDTO } from './dto/user.dto';
import { ApiTags,ApiOperation, ApiBearerAuth } from '@nestjs/swagger';
import { JwtAuthGuard } from 'src/auth/guards/jwt-auth.guard';


@ApiTags('users')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller('api/v1/user')
export class UserController {
    constructor(private readonly userService: UserService){}
    @Post()
    @ApiOperation({summary: 'Create User'})
    create(@Body() userDTO: UserDTO){
        return this.userService.create(userDTO)
    }

    @Get()
    @ApiOperation({summary: 'Find All User'})
    findAll()
    {
        return this.userService.findAll();
    }

    @Get(':id')
    @ApiOperation({summary: 'Find One User'})
    findOne(@Param('id') id:string){
        return this.userService.findOne(id);
    }

    @Put(':id')
    @ApiOperation({summary: 'Update User'})
    update(@Param('id') id: string, @Body() userDTO:UserDTO){
        return this.userService.update(id,userDTO);
    }

    @Delete(':id')
    @ApiOperation({summary: 'Delete User'})
    delete(@Param('id') id:string){
        return this.userService.delete(id);
    }
}
