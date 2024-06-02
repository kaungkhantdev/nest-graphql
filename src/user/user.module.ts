import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './models/user.model';
import { UserSetting } from './models/user-setting.model';
import { UserResolver } from './resolvers/user.resolver';
import { UserSettingResolver } from './resolvers/user-setting.resolver';
import { UserService } from './user.service';
import { UserRepo } from './repository/user.repo';
import { UserSettingRepo } from './repository/user-setting.repo';

@Module({
  imports: [TypeOrmModule.forFeature([User, UserSetting])],
  controllers: [],
  providers: [
    UserResolver,
    UserSettingResolver,
    UserService,
    UserRepo,
    UserSettingRepo,
  ],
})
export class UserModule {}
