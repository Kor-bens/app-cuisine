import { Module } from '@nestjs/common';
import { RecetteService } from './recette.service';
import { ConfigModule } from '@nestjs/config';
import { PrismaModule } from 'src/shared/prisma/prisma.module';
import { RecetteController } from './recette.controller';

@Module({
    // imports: [
    //     ConfigModule.forRoot(),
    //     PrismaModule,
        
    // ],
    controllers: [RecetteController],   
    providers: [RecetteService],
})
export class RecetteModule {}