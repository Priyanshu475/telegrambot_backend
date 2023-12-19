import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: [
      'https://telegrambot-client.vercel.app',
      'https://telegrambot-client-priyanshu475.vercel.app/',
      'https://telegrambot-client-git-main-priyanshu475.vercel.app/',
      'https://telegrambot-client-1hjy0cd3j-priyanshu475.vercel.app/',
    ],
  });

  await app.listen(process.env.PORT || 8000);
}
bootstrap();
