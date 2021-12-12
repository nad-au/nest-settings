import { EntityBase } from 'src/common/entities/EntityBase';
import { Setting } from './setting.entity';
export declare class SettingCategory extends EntityBase {
    id: number;
    name: string;
    settings: Setting[];
}
