export class CProfile{
    profileId:number;
    profile:string;

    constructor(profile?:{profileId:number, profile:string}){
        if(profile){
            _.assignIn(this,profile);
        }
    }
}