import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class UsersService {
    constructor(@InjectRepository(User) private repo: Repository<User>) {
    }

    create(email: string, password: string) {
        const user: User = this.repo.create();
        user.email = email;
        user.password = password;

        return this.repo.save(user);
    }
}
