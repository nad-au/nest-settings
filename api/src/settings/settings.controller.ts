import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { Setting } from './entities/setting.entity';
import { SettingsService } from './settings.service';

@Controller('settings')
export class SettingsController {
  constructor(private readonly settingsService: SettingsService) {}

  @Post()
  create(@Body() setting: Setting): Promise<Setting> {
    return this.settingsService.create(setting);
  }

  @Get()
  getAll(): Promise<Setting[]> {
    return this.settingsService.getAll();
  }

  @Get(':key')
  get(@Param('key') key: string): Promise<Setting> {
    return this.settingsService.get(key);
  }

  @Delete(':key')
  delete(@Param('key') key: string): Promise<void> {
    return this.settingsService.delete(key);
  }
}
