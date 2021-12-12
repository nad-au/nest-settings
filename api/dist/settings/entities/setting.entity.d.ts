import { AccountSetting } from 'src/accounts/entities/accountSetting.entity';
import { EntityBase } from 'src/common/entities/EntityBase';
import { SettingCategory } from './settingCategory.entity';
import { SettingDataType } from './settingDataType.entity';
import { SettingType } from './settingType.entity';
export declare class Setting extends EntityBase {
    id: number;
    key: string;
    description: string;
    defaultValue: string;
    enabled: boolean;
    category: SettingCategory;
    type: SettingType;
    dataType: SettingDataType;
    accountSettings: AccountSetting[];
}
