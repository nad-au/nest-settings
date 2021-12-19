import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Repository } from 'typeorm/repository/Repository';
import { SettingType } from '../entities/settingType.entity';

@EntityRepository(SettingType)
export class SettingTypeRepository extends Repository<SettingType> {
  getByName(name: string): Promise<SettingType> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .getOne();
  }

  getIdByName(name: string): Promise<SettingType> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .select('entity.id')
      .getOne();
  }
}
