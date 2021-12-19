import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Repository } from 'typeorm/repository/Repository';
import { SettingCategory } from '../entities/settingCategory.entity';

@EntityRepository(SettingCategory)
export class SettingCategoryRepository extends Repository<SettingCategory> {
  getByName(name: string): Promise<SettingCategory> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .getOne();
  }

  getIdByName(name: string): Promise<SettingCategory> {
    return this.createQueryBuilder('entity')
      .where('entity.name = :name', { name: name })
      .select('entity.id')
      .getOne();
  }
}
