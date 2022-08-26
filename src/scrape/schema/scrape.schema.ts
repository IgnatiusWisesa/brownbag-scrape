import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";
import { ApiProperty } from "@nestjs/swagger";
import { Document } from "mongoose";

export type BrownBagHouseScrapeDocument = BrownBagHouseScrape & Document;

@Schema()
export class BrownBagHouseScrape {
    @ApiProperty()
    @Prop()
    title: string

    @ApiProperty()
    @Prop()
    images: string

    @ApiProperty()
    @Prop()
    price_title: string

    @ApiProperty()
    @Prop()
    price_value: string

    @ApiProperty()
    @Prop()
    agent: string

    @ApiProperty()
    @Prop()
    telephone: string

    @ApiProperty()
    @Prop()
    property_detail: string

    @ApiProperty()
    @Prop()
    link: string

    @ApiProperty()
    @Prop()
    address: string

    @ApiProperty()
    @Prop()
    bedroom: string

    @ApiProperty()
    @Prop()
    bathroom: string

    @ApiProperty()
    @Prop()
    building_area: string

    @ApiProperty()
    @Prop()
    land_area: string

    @ApiProperty()
    @Prop()
    location: string

    @ApiProperty()
    @Prop()
    source: string

    @ApiProperty()
    @Prop()
    property_type: string
}

export const BrownBagHouseScrapeSchema = SchemaFactory.createForClass(BrownBagHouseScrape)