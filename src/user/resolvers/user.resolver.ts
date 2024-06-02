import {
  Resolver,
  Query,
  Args,
  Int,
  ResolveField,
  Parent,
  Mutation,
} from '@nestjs/graphql';
import { User } from '../models/user.model';
import { mockUsers, mockUserSetting } from '../../graphql/__mock__/users';
import { UserSetting } from '../models/user-setting.model';
import { CreateUserInput } from '../../graphql/inputs/create-user-input';
import { UserService } from '../user.service';

@Resolver((of) => User)
export class UserResolver {
  constructor(private userService: UserService) {}
  @Query((returns) => User, { nullable: true })
  async getUserById(@Args('id', { type: () => Int }) id: number) {
    return this.userService.getUserById(id);
  }

  @Query((returns) => [User], { nullable: true })
  async getUsers() {
    return this.userService.getUsers();
  }

  // @ResolveField((returns) => UserSetting, { name: 'setting', nullable: true })
  // async getUserSetting(@Parent() user: User) {
  //   return mockUserSetting.find((set) => set.userId == user.id);
  // }

  @Mutation((returns) => User)
  createUser(@Args('createUserData') createUserData: CreateUserInput) {
    return this.userService.createUser(createUserData);
  }
}
