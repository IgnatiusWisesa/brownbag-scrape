import { Controller, Post, Query } from '@nestjs/common';
import { ScrapeService } from './scrape.service';
import * as puppeteer from 'puppeteer';
import * as _ from 'lodash';

@Controller('scrape')
export class ScrapeController {

    constructor( private readonly scrapeService:ScrapeService ){}

    @Post('rumah123/premiere')
    async rumah123_one_time(
        @Query('url') url: string,
        @Query('start_page') start_page: number,
        @Query('end_page') end_page: number
    ): Promise<any> {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        this.rumah123_ver1_helper(page, url, start_page, end_page)

        return 'scraping running @ background'
    }

    async rumah123_ver1_helper(page, url, start_page, end_page) {
        let result = []
        for( var j = start_page; j <= end_page; j++ ){
            console.log(`${url}${j}`)
            await page.goto(`${url}${j}`);
            result = [
                ...result, 
                ...await this.scrapeService.rumah123_ver_1(page)
            ]
        }

        return result
    }

    @Post('rumah123/regular')
    async rumah123_ver_2(
        @Query('url') url: string,
        @Query('start_page') start_page: number,
        @Query('end_page') end_page: number
    ): Promise<any> {

        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        this.rumah123_ver2_helper(page, url, start_page, end_page)

        return 'scraping running @ background'
    }

    async rumah123_ver2_helper(page, url, start_page, end_page) {
        let result = []
        for( var j = start_page; j <= end_page; j++ ){
            console.log(`${url}${j}`)
            await page.goto(`${url}${j}`);
            result = [
                ...result, 
                ...await this.scrapeService.rumah123_ver_2(page)
            ]
        }

        return result
    }    

}