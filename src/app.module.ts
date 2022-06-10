import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SmsController } from './controllers/sms.controller';
import { SmsService } from './services/sms.service';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
  ],
  controllers: [AppController, SmsController],
  providers: [AppService, SmsService],
})
export class AppModule {}
