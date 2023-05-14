import { Controller, Post, Body, Patch, Delete, Param, Get, InternalServerErrorException, Query, Put } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';
import { UpdateUserDto } from './dtos/update-user.dto';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Get(':id')
    findUser(@Param('id') id: string) {
        return this.userService.findOne(parseInt(id));
    }

    @Get()
    findAllUsers(@Query() query: Record<string, any>) {
        return this.userService.find(query);
    }

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password);
    }

    @Patch('/:id')
    updateUser(@Param('id') id: string, @Body() body: UpdateUserDto) {
        return this.userService.update(+id, body);
    }

    @Delete('/:id')
    deleteUser(@Param('id') id: string) {
        return this.userService.remove(+id);
    }
}
