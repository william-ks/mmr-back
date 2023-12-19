import { Module } from '@nestjs/common';
import { PrismaGlobalModule } from './config/prisma/prisma.module';

@Module({
  imports: [],
  controllers: [],
  providers: [PrismaGlobalModule],
})
export class AppModule {}
