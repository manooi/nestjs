import { Injectable, NotFoundException, BadRequestException, InternalServerErrorException } from '@nestjs/common';
import { FindOptionsWhere, Repository } from 'typeorm';
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

    find(query: Record<string, any>) {
        let findOptions :FindOptionsWhere<User> = {};
        if(query.email) {
            findOptions.email = query.email;
        }
        if(query.id) {
            findOptions.id = query.id;
        }

        return this.repo.find({ where: findOptions });
    }

    async update(id: number, attrs: Partial<User>) {
        let user = await this.repo.findOneBy({ id: id });

        if (!user) {
            return new NotFoundException();
        }

        Object.assign(user, attrs);
        return this.repo.save(user);
    }

    async remove(id: number) {
        const user: User = await this.repo.findOneBy({ id: id});
        if (!user) {
            return new NotFoundException();
        }

        return this.repo.remove(user);
    }
}
