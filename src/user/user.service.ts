import { Injectable } from '@nestjs/common';
import { UserRepo } from './repository/user.repo';
import { UserSettingRepo } from './repository/user-setting.repo';
import { CreateUserSettingInput } from 'src/graphql/inputs/update-user-setting-input';
import { CreateUserInput } from 'src/graphql/inputs/create-user-input';

@Injectable()
export class UserService {
  constructor(
    private userRepo: UserRepo,
    private userSettingRepo: UserSettingRepo,
  ) {}

  async getUsers() {
    return this.userRepo.findAll();
  }

  async getUserById(id: number) {
    return this.userRepo.findOne(id);
  }

  async createUser(data: CreateUserInput) {
    return this.userRepo.create(data);
  }
  async createUserSetting(data: CreateUserSettingInput) {
    const userSetting = await this.userSettingRepo.create(data);
    await this.userRepo.update(data.userId, {
      setting: userSetting,
    });
    return userSetting;
  }
}
