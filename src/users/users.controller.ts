import { Controller, Post, Body, Patch, Delete, Param, Get, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Get(':id')
    getUser(@Param('id') id: string) {
        return this.userService.findOne(+id);
    }

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password);
    }

    @Delete('/signup/:id')
    updateUser(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
