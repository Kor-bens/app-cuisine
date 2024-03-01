import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/prisma/prisma.module';
import { RecetteModule } from './recette/recette.module';

@Module({
  imports: [
    ConfigModule,
    PrismaModule,
    RecetteModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
