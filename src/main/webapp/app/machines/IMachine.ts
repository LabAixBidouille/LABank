/**
 * Created by kprim on 28/02/2017.
 */
export class IMachine {
    id: number;
    nom: string;
    description: string;
    specification: string;
    illustration: string;
    constructor(machine?:{id:number,nom:string,description:string,specification:string, illustration:string}) {
        if(machine) {
            _.assignIn(this, machine);
        }
    }
}