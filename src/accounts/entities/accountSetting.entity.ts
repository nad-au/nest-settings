import { EntityBase } from "src/common/entities/EntityBase";
import { Setting } from "src/settings/entities/setting.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryColumn, PrimaryGeneratedColumn, Unique } from "typeorm";
import { Account } from "./account.entity";

@Entity({
    name: 'account_settings'
})
@Unique(['account','setting'])
export class AccountSetting extends EntityBase {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        nullable: false,
        name: 'setting_value'
    })
    settingValue: string;

    @ManyToOne(() => Account, account => account.accountSettings, {
        nullable: false,
        onDelete: 'CASCADE'        
    })
    public account: Account;

    @ManyToOne(() => Setting, setting => setting.accountSettings, {
        nullable: false,
        onDelete: 'CASCADE'
    })
    public setting: Setting;}