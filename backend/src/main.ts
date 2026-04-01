import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';

// 👇 IMPORTS NUEVOS PARA SWAGGER
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  app.enableCors({ origin: '*' });
  app.useGlobalPipes(new ValidationPipe({ whitelist: true, transform: true }));

  app.setGlobalPrefix('api');

  app.useStaticAssets(path.join(__dirname, '..', 'imagenes'), {
    prefix: '/imagenes',
  });

  // 👇 SWAGGER CONFIG
  const config = new DocumentBuilder()
    .setTitle('ShortStayMX API')
    .setDescription('API docs for properties, availability, cities, etc.')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  // 👉 Ruta:  https://tu-backend.com/api/docs
  SwaggerModule.setup('api/docs', app, document);

  await app.listen(process.env.PORT ?? 3001);
}

bootstrap();
