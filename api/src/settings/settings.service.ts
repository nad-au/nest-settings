import { Injectable } from '@nestjs/common';
import { Setting } from './entities/setting.entity';
import {
  SettingCategoryNotFoundException,
  SettingDataTypeNotFoundException,
  SettingTypeNotFoundException,
} from './exceptions';
import { SettingTypeRepository } from './repositories/setingTypeRepository';
import { SettingCategoryRepository } from './repositories/settingCategoryRepository';
import { SettingDataTypeRepository } from './repositories/settingDataTypeRepository';
import { SettingRepository } from './repositories/settingRepository';

@Injectable()
export class SettingsService {
  constructor(
    private settingRepository: SettingRepository,
    private settingTypeRepository: SettingTypeRepository,
    private settingDataTypeRepository: SettingDataTypeRepository,
    private settingCategoryRepository: SettingCategoryRepository,
  ) {}

  async create(setting: Setting): Promise<Setting> {
    const type = await this.settingTypeRepository.getIdByName('system');
    if (!type) throw new SettingTypeNotFoundException();
    setting.type = type;

    const dataType = await this.settingDataTypeRepository.getIdByName('text');
    if (!dataType) throw new SettingDataTypeNotFoundException();
    setting.dataType = dataType;

    const category = await this.settingCategoryRepository.getIdByName(
      'settings',
    );
    if (!category) throw new SettingCategoryNotFoundException();
    setting.category = category;

    return this.settingRepository.save(setting);
  }

  getAll(): Promise<Setting[]> {
    return this.settingRepository.find();
  }

  get(key: string): Promise<Setting> {
    return this.settingRepository.getByKey(key);
  }

  async delete(key: string): Promise<void> {
    await this.settingRepository
    .createQueryBuilder()
    .delete()
    .from(Setting)
    .where("setting_key = :key", { key: key })
    .execute();
  }
}
