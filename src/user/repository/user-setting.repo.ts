import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserSetting } from '../models/user-setting.model';
import { Repository } from 'typeorm';
import { CreateUserSettingInput } from 'src/graphql/inputs/update-user-setting-input';

@Injectable()
export class UserSettingRepo {
  constructor(
    @InjectRepository(UserSetting)
    private repo: Repository<UserSetting>,
  ) {}

  create(data: CreateUserSettingInput): Promise<UserSetting> {
    return this.repo.save(data);
  }
}
