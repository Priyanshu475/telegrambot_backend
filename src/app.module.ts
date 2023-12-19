import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { BotModule } from './bot/bot.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://Priyanshu:SvoQPok3esdBeFRx@nodeblogs.7lcrt7b.mongodb.net/telegram_bot?retryWrites=true&w=majority',
    ),
    UserModule,
    BotModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
