import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers, mockUserSetting } from '../__mock__/users';
import { UserSetting } from '../models/user-setting.model';

@Resolver((of) => User)
export class UserResolver {
  @Query((returns) => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return mockUsers.find((user) => user.id == id);
  }

  @Query((returns) => [User], { nullable: true })
  async getUsers() {
    return mockUsers;
  }

  @ResolveField((returns) => UserSetting, { name: 'setting', nullable: true })
  async getUserSetting(@Parent() user: User) {
    return mockUserSetting.find((set) => set.userId == user.id);
  }
}
