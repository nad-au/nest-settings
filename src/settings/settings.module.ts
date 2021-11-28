import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { SettingCategory } from './entities/settingCategory.entity';
import { SettingDataType } from './entities/settingDataType.entity';
import { SettingType } from './entities/settingType.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Setting, SettingCategory, SettingType, SettingDataType])]
})
export class SettingsModule {}
