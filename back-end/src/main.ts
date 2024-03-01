// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as process from 'process';
// import { PrismaService } from './shared/prisma/prisma.service';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT);
//   app.get(PrismaService)
//   app.enableCors({
//     origin: 'http://localhost:5173',
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true,
// });
// }
// bootstrap();


import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { PrismaService } from './shared/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  // Configuration des en-têtes CORS
  app.enableCors({
    origin: 'http://localhost:5173', // Ajoute ici l'origine de ton frontend
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(process.env.PORT);
}

bootstrap();

