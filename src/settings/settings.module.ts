import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Setting } from './entities/setting.entity';
import { SettingCategory } from './entities/settingCategory.entity';
import { SettingDataType } from './entities/settingDataType.entity';

@Module({
    imports: [TypeOrmModule.forFeature([Setting, SettingCategory, SettingDataType])]
})
export class SettingsModule {}
