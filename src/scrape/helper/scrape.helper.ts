import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { BrownBagHouseScrape, BrownBagHouseScrapeDocument } from '../schema/scrape.schema';

@Injectable()
export class ScrapeHelper {

    @InjectModel(BrownBagHouseScrape.name) private readonly brownBagHouseScrapeModel: Model<BrownBagHouseScrapeDocument>

    async filterAndInputDatas(datas) : Promise<any> {
        for( var i = 0 ; i < datas.length; i++ ) {
            // remove null title & price
            if( 
                ![null, undefined, "", "null", "undefined"].includes(datas[i].title) &&
                ![null, undefined, "", "null", "undefined"].includes(datas[i].price_value) &&
                ![null, undefined, "", "null", "undefined"].includes(datas[i].telephone) &&
                await (await this.brownBagHouseScrapeModel.find({ images: datas[i].images })).length == 0
            ) {
                console.log('inputting data - ', i)
                console.log(datas[i])
                await this.brownBagHouseScrapeModel.create(datas[i])
            }
        }
    }
}
