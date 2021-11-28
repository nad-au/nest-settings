import { EntityBase } from "src/common/entities/EntityBase";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Setting } from "./setting.entity";

@Entity({
    name: 'setting_types'
})
export class SettingType extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        unique: true,
    })
    name: string;

    @OneToMany(() => Setting, setting => setting.type)
    settings: Setting[];
}