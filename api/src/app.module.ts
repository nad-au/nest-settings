import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SettingsModule } from './settings/settings.module';
import { AccountsModule } from './accounts/accounts.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createConnection, getConnectionOptions } from 'typeorm';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async () =>
        Object.assign(await getConnectionOptions(), {
          autoLoadEntities: true,
        }),
      // connectionFactory receives the configured ConnectionOptions
      // and returns a Promise<Connection>.
      connectionFactory: async (options) => {
        const connection = await createConnection(options);
        return connection;
      },
    }),
    SettingsModule,
    AccountsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
