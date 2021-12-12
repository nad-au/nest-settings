import { EntityBase } from 'src/common/entities/EntityBase';
import { Setting } from 'src/settings/entities/setting.entity';
import { Account } from './account.entity';
export declare class AccountSetting extends EntityBase {
    id: number;
    settingValue: string;
    account: Account;
    setting: Setting;
}
