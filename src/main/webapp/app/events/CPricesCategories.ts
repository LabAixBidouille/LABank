/**
 * Created by Kandel on 22/06/2017.
 */
export class CPricesCategories{
    idPricesCategories:number;
    name:string;
    usageCount:number;
    description:string;

    constructor(pricesCategories?:{idPricesCategories:number,name:string,usageCount:number,description:string}){
        if(pricesCategories){
            _.assignIn(this,pricesCategories);
        }
    }
}