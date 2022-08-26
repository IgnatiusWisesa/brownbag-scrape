import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ScrapeHelper } from './helper/scrape.helper';
import { BrownBagHouseScrape, BrownBagHouseScrapeSchema } from './schema/scrape.schema';
import { ScrapeController } from './scrape.controller';
import { ScrapeService } from './scrape.service';

@Module({
  imports: [ MongooseModule.forFeature([ { name: BrownBagHouseScrape.name, schema: BrownBagHouseScrapeSchema } ]) ],
  controllers: [ScrapeController],
  providers: [ScrapeService, ScrapeHelper],
})
export class ScrapeModule {}
