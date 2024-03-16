import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { PrismaService } from './shared/prisma/prisma.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  
  app.enableCors({
    origin: (origin, callback) => {
      const allowedOrigins = ['http://localhost:5173'];
      if (allowedOrigins.includes(origin) || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });
  
  await app.listen(process.env.PORT);
}

bootstrap();

// import { NestFactory } from '@nestjs/core';
// import { AppModule } from './app.module';
// import * as process from 'process';
// import { PrismaService } from './shared/prisma/prisma.service';

// async function bootstrap() {
//   const app = await NestFactory.create(AppModule);
//   await app.listen(process.env.PORT);
//   app.get(PrismaService);
// }
// bootstrap();
