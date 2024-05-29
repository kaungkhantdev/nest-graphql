import { Resolver, Query } from '@nestjs/graphql';
import { User } from '../models/user.model';

@Resolver('User')
export class UserResolver {
  @Query((returns) => User)
  getUser() {
    return {
      id: 1,
      name: 'hello test',
      age: 23,
      email: 'test@test',
    };
  }
}
