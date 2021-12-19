import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SettingTypeRepository } from './repositories/setingTypeRepository';
import { SettingCategoryRepository } from './repositories/settingCategoryRepository';
import { SettingDataTypeRepository } from './repositories/settingDataTypeRepository';
import { SettingRepository } from './repositories/settingRepository';
import { SettingsController } from './settings.controller';
import { SettingsService } from './settings.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SettingRepository,
      SettingCategoryRepository,
      SettingTypeRepository,
      SettingDataTypeRepository,
    ]),
  ],
  providers: [SettingsService],
  controllers: [SettingsController],
})
export class SettingsModule {}
