import { EntityBase } from 'src/common/entities/EntityBase';
import { AccountSetting } from './accountSetting.entity';
export declare class Account extends EntityBase {
    id: number;
    name: string;
    enabled: boolean;
    accountSettings: AccountSetting[];
}
