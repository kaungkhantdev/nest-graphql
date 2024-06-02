import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/user-setting.model';
import { CreateUserSettingInput } from '../../graphql/inputs/update-user-setting-input';
import { UserService } from '../user.service';

@Resolver()
export class UserSettingResolver {
  constructor(private userService: UserService) {}
  @Mutation((returns) => UserSetting)
  async createUserSetting(
    @Args('createUserSetting') data: CreateUserSettingInput,
  ) {
    return this.userService.createUserSetting(data);
  }
}
