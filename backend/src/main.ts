import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));
  app.setGlobalPrefix('api');
  app.useStaticAssets(path.join(__dirname, '..', 'imagenes'), {
    prefix: '/imagenes',
    setHeaders: (res) => {
      res.setHeader('Cache-Control', 'public, max-age=2592000');
    },
  });
  await app.listen(process.env.PORT ?? 3001);
}
bootstrap();
