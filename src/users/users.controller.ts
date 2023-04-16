import { Controller, Post, Body, Patch, Delete, Param } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Post('/signup')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password);
    }

    @Delete('/signup/:id')
    updateUser(@Param('id') id: string){
        return this.userService.remove(+id);
    }
}
