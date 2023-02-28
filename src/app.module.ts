import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { ConfigModule } from '@nestjs/config';
import configuration from './config/configuration';
import { InteractionModule } from './interaction/interaction.module';
import { EventModule } from './event/event.module';
import { DatabaseModule } from './database/database.module';
import { SegmentModule } from './segment/segment.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    DatabaseModule,
    InteractionModule,
    EventModule,
    SegmentModule,
  ],

  controllers: [AppController],
})
export class AppModule {}
