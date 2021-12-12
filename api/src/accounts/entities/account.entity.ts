import { EntityBase } from 'src/common/entities/EntityBase';
import { Setting } from 'src/settings/entities/setting.entity';
import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { AccountSetting } from './accountSetting.entity';

@Entity({
  name: 'accounts',
})
export class Account extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @Column({
    nullable: false,
    default: true,
  })
  enabled: boolean;

  @OneToMany(() => AccountSetting, (accountSetting) => accountSetting.account)
  accountSettings: AccountSetting[];
}
