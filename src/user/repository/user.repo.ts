import { Injectable, NotAcceptableException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.model';
import { Repository } from 'typeorm';
import { CreateUserInput } from 'src/graphql/inputs/create-user-input';

@Injectable()
export class UserRepo {
  constructor(
    @InjectRepository(User)
    private repo: Repository<User>,
  ) {}

  create(data: CreateUserInput): Promise<User> {
    return this.repo.save(data);
  }
  findAll(): Promise<User[]> {
    return this.repo.find({ relations: ['setting'] });
  }

  findOne(id: number): Promise<User | null> {
    return this.repo.findOne({ where: { id }, relations: ['setting'] });
  }

  async update(id: number, attrs: Partial<User>): Promise<User> {
    try {
      const user = await this.repo.findOneById(id);

      Object.assign(user, attrs);
      await this.repo.save(user);

      return this.findOne(id);
    } catch (error) {
      const err = error as Error;
      throw new NotAcceptableException(err.message);
    }
  }
}
