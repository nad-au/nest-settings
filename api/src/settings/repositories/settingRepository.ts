import { EntityRepository } from 'typeorm/decorator/EntityRepository';
import { Repository } from 'typeorm/repository/Repository';
import { Setting } from '../entities/setting.entity';

@EntityRepository(Setting)
export class SettingRepository extends Repository<Setting> {
  getByKey(key: string): Promise<Setting> {
    return this.createQueryBuilder('entity')
      .where('entity.setting_key = :key', { key: key })
      .getOne();
  }
}
