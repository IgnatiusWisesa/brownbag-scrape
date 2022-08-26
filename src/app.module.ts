import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ScrapeModule } from './scrape/scrape.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();

@Module({
  imports: [
    MongooseModule.forRoot(process.env.DB_URL),
    ScrapeModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
