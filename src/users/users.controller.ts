import { Controller, Post, Body, Patch } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';
import { UsersService } from './users.service';

@Controller('auth')
export class UsersController {
    constructor(private userService: UsersService) {

    }

    @Post('signup')
    createUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password);
    }

    @Patch('')
    updateUser(@Body() body: CreateUserDto) {
        return this.userService.create(body.email, body.password);
    }
}
