import { type } from 'os';
import { AccountSetting } from 'src/accounts/entities/accountSetting.entity';
import { EntityBase } from 'src/common/entities/EntityBase';
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { SettingCategory } from './settingCategory.entity';
import { SettingDataType } from './settingDataType.entity';
import { SettingType } from './settingType.entity';

@Entity({
  name: 'settings',
})
export class Setting extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'setting_key',
    unique: true,
  })
  key: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
    name: 'default_value',
  })
  defaultValue: string;

  @Column({
    default: true,
  })
  enabled: boolean;

  @ManyToOne(() => SettingCategory, (category) => category.settings, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  category: SettingCategory;

  @ManyToOne(() => SettingType, (type) => type.settings, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  type: SettingType;

  @ManyToOne(() => SettingDataType, (dataType) => dataType.settings, {
    nullable: false,
    onDelete: 'CASCADE',
  })
  dataType: SettingDataType;

  @OneToMany(() => AccountSetting, (accountSetting) => accountSetting.account)
  accountSettings: AccountSetting[];
}
