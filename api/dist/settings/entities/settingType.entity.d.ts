import { EntityBase } from 'src/common/entities/EntityBase';
import { Setting } from './setting.entity';
export declare class SettingType extends EntityBase {
    id: number;
    name: string;
    settings: Setting[];
}
