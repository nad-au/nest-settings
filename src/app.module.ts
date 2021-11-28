import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { AccountsModule } from './accounts/accounts.module';

@Module({
  imports: [TypeOrmModule.forRoot({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'pass123',
    database: 'settings',
    autoLoadEntities: true,
    synchronize: true,
  }), SettingsModule, AccountsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
