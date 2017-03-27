/**
 * Created by kprim on 23/03/2017.
 */
export class CMachineManual {
    idDocMachine: number;
    fileName: string;
    constructor(document?:{idDocMachine:number,fileName:string}) {
        if(document) {
            _.assignIn(this, document);
        }
    }
}