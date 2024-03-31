import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
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
// import { AuthMiddleware } from './shared/middleware/auth.middleware';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { JwtInterceptor } from './shared/middleware/jwt.interceptor';


// import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [ConfigModule, PrismaModule, RecetteModule, UserModule, 
    // JwtModule.register({
    //   secret: process.env.JWT_SECRET,
    //   signOptions: { expiresIn: '1h' }, 
    // }),
  ],
  controllers: [AppController, UserController, RecetteController],
  providers: [AppService, UserService, RecetteService, {
    provide: APP_INTERCEPTOR,
      useClass: JwtInterceptor,
  }],
})
export class AppModule {}

// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(AuthMiddleware).forRoutes('*'); // Appliquer le middleware à toutes les routes
//   }
// }

//RESOUDRE URGEMMENT LE PROBLEME DE JWT : userService et controller + recetteController et service + middleware auth