import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Account } from './entities/account.entity';
import { AccountSetting } from './entities/accountSetting.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Account, AccountSetting])],
})
export class AccountsModule {}
