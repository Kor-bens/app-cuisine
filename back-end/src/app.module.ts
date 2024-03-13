import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from './shared/prisma/prisma.module';
import { RecetteModule } from './recette/recette.module';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { RecetteController } from './recette/recette.controller';
import { RecetteService } from './recette/recette.service';

@Module({
  imports: [ConfigModule, PrismaModule, RecetteModule, UserModule],
  controllers: [AppController, UserController, RecetteController],
  providers: [AppService, UserService, RecetteService],
})
export class AppModule {}
