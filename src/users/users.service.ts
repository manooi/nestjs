import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
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

    async findOne(id: number) {
        if (!id) {
            return new BadRequestException();
        }

        try {
            const user = await this.repo.findOneBy({ id: id });
            if (user != null) {
                return user;
            }
    
            return new NotFoundException();
        }

        catch (error) {
            return new InternalServerErrorException();
        }
    }

    find() {

    }

    update() {

    }

    async remove(id: number) {
        const user: User = await this.repo.findOne({ where: { id: id } });
        if (user != null) {
            return this.repo.remove(user);
        }
        return new NotFoundException();
    }
}
