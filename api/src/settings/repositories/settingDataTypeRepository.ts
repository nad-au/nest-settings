import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Repository } from 'typeorm/repository/Repository';
import { SettingDataType } from '../entities/settingDataType.entity';

@EntityRepository(SettingDataType)
export class SettingDataTypeRepository extends Repository<SettingDataType> {
  getByName(name: string): Promise<SettingDataType> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .getOne();
  }

  getIdByName(name: string): Promise<SettingDataType> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .select('entity.id')
      .getOne();
  }
}
