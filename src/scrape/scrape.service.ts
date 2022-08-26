import { Injectable } from '@nestjs/common';
import { ScrapeHelper } from './helper/scrape.helper';

@Injectable()
export class ScrapeService {

    constructor( private helper: ScrapeHelper ){}

    async rumah123_ver_1( page : any ): Promise<any> {
        let datas : any = []
        datas = await page.evaluate(() =>
            Array.from(document.querySelectorAll('.ui-organisms-card-r123-featured--premier'))
                .map((element: any) => ({
                    title: element.querySelector(".ui-organisms-card-r123-featured__content-wrapper > .ui-organisms-card-r123-featured__middle-section > .ui-organisms-card-r123-featured__middle-section__title") ?.innerText || "",
                    price_title: element.querySelector('.ui-organisms-card-r123-featured__middle-section__price') ?.innerText ?.split('\n') ?.[0] || "",
                    price_value: element.querySelector('.ui-organisms-card-r123-featured__middle-section__price') ?.innerText ?.split('\n') ?.[0].split(' ')[2] == 'Milliar' ? 
                            parseFloat(element.querySelector('.ui-organisms-card-r123-featured__middle-section__price') ?.innerText ?.split('\n') ?.[0].split(' ')[1].replace(/,/g, '.')) * 1000000000 :
                            parseFloat(element.querySelector('.ui-organisms-card-r123-featured__middle-section__price') ?.innerText ?.split('\n') ?.[0].split(' ')[1].replace(/,/g, '.')) * 1000000 || "",
                    agent: element.querySelector('.ui-organisms-card-r123-basic__bottom-section__agent') ?.innerText ?.split('\n') ?.[0] || "",
                    telephone: element.querySelector('.ui-atomic-button--children > .ui-atomic-ellipsis') ?.innerText || "",
                    images: element.querySelector('.ui-atomic-text--styling-default > picture > source') ?.getAttribute('srcset').split(' ')[0] || "",
                    link: 'https://www.rumah123.com' + element.querySelector('.ui-organisms-card-r123-featured__middle-section__title') ?.getAttribute('href') || "",
                    address: element.querySelector('.ui-organisms-card-r123-featured__middle-section__address') ?.innerText || "",
                    bedroom: element.querySelector('.attribute-text') ?.innerText || "",
                    bathroom: element.querySelector('.ui-molecules-list__divider-none--horizontal') ?.outerText ?.split('\n')[1] || "",
                    land_area: element.querySelector('.ui-organisms-card-r123-basic__property-attribute') ?.outerText ?.split(":")[1] ?.split(" ")[1] || "",
                    building_area: element.querySelector('.ui-organisms-card-r123-basic__property-attribute') ?.outerText ?.split(":")[2] ?.split(" ")[1] || "",
                    location: element.querySelector('.ui-organisms-card-r123-featured__middle-section__address') ?.innerText || "",
                }))
        )

        this.helper.filterAndInputDatas(datas)
        return 'inputting datas...'
    }

    async rumah123_ver_2( page : any ): Promise<any> {

        let datas : any = []
        datas = await page.evaluate(() => 
            Array.from(document.querySelectorAll('.ui-organism-intersection__element'))
                .map((element: any) => ({
                    title: element.querySelector('.ui-organisms-card-r123-basic__title-section__left') ?.innerText || "",
                    price_title: element.querySelector('.ui-organisms-card-r123-basic__price') ?.innerText || "",
                    price_value:  [null, undefined].includes(element.querySelector('.ui-organisms-card-r123-basic__price')) ? "" : 
                                    element.querySelector('.ui-organisms-card-r123-basic__price').innerText.split(' ')[2] == 'Miliar' ? 
                                    Number(element.querySelector('.ui-organisms-card-r123-basic__price').innerText.split(' ')[1].replace(/,/g, '.')) * 1000000000 :
                                    Number(element.querySelector('.ui-organisms-card-r123-basic__price').innerText.split(' ')[1].replace(/,/g, '.')) * 1000000,
                    agent: element.querySelector('.ui-organisms-card-r123-basic__bottom-section__agent > div > p') ?.innerText || "",
                    telephone: element.querySelector('.ui-atomic-button--children > .ui-atomic-ellipsis') ?.innerText || "",
                    images: element.querySelector('.ui-organisms-card-r123-basic__media-section > picture > source') ?.getAttribute('srcset').split(' ')[0] || "",
                    link: element.querySelector('.ui-organisms-card-r123-basic__title-section__left > a') ? 'https://www.rumah123.com' + element.querySelector('.ui-organisms-card-r123-basic__title-section__left > a').getAttribute('href') : "",
                    address: element.querySelector('.ui-organisms-card-r123-basic__title-section__left > p') ?.innerText || "",
                    bedroom: element.querySelector('.attribute-text') ?.innerText || "",
                    bathroom: element.querySelector('.ui-molecules-list__divider-none--horizontal') ?.outerText ?.split('\n')[1] || "",
                    land_area: element.querySelector('.ui-organisms-card-r123-basic__property-attribute') ?.outerText ?.split(":")[1] ?.split(" ")[1] || "",
                    building_area: element.querySelector('.ui-organisms-card-r123-basic__property-attribute') ?.outerText ?.split(":")[2] ?.split(" ")[1] || "",
                    location: element.querySelector('.ui-organisms-card-r123-basic__title-section__left > p') ?.innerText || ""
                }
            ))
        )

        this.helper.filterAndInputDatas(datas)
        return 'inputting datas...'
    }

}
