import {IEvent} from "./IEvent";
import {CPricesCategories} from "./CPricesCategories";
/**
 * Created by Kandel on 06/07/2017.
 */
export class CEventPricesCategories{
    event:IEvent;
    pricesCat:CPricesCategories;
    price:number;

    constructor(eventPricesCategories?:{event:IEvent,pricesCat:CPricesCategories,price:number}){
        if(eventPricesCategories){
            _.assignIn(this,eventPricesCategories);
        }
    }
}
