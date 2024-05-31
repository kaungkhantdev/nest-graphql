import { Args, Mutation, Resolver } from '@nestjs/graphql';
import { UserSetting } from '../models/user-setting.model';
import { CreateUserSettingInput } from '../inputs/update-user-setting-input';
import { mockUserSetting } from '../__mock__/users';

@Resolver()
export class UserSettingResolver {
  @Mutation((returns) => UserSetting)
  async createUserSetting(
    @Args('updateData') updateData: CreateUserSettingInput,
  ) {
    mockUserSetting.push(updateData);
    return updateData;
  }
}
