import { EntityBase } from "src/common/entities/EntityBase";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { SettingCategory } from "./settingCategory.entity";
import { SettingDataType } from "./settingDataType.entity";

@Entity({
    name: 'settings'
})
export class Setting extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        name: 'setting_key',
        unique: true
    })
    key: string;

    @Column({
        nullable: true
    })
    description: string;

    @Column({
        name: 'default_value',
        nullable: true
    })
    defaultValue: string;

    @Column({
        default: true
    })
    enabled: boolean;

    @ManyToOne(() => SettingCategory, category => category.settings, {
        onDelete: 'CASCADE',
        nullable: false
    })
    category: SettingCategory;

    @ManyToOne(() => SettingDataType, dataType => dataType.settings, {
        onDelete: 'CASCADE',
        nullable: false
    })
    dataType: SettingDataType;
}