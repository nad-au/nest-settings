import { EntityBase } from 'src/common/entities/EntityBase';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Setting } from './setting.entity';

@Entity({
  name: 'setting_categories',
})
export class SettingCategory extends EntityBase {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    unique: true,
  })
  name: string;

  @OneToMany(() => Setting, (setting) => setting.category)
  settings: Setting[];
}
