/**
 * Created by kprim on 28/02/2017.
 */
import {CMachineManual} from "./CMachineManual";
export class IMachine {
    id: number;
    name: string;
    description: string;
    specification: string;
    illustration: string;
    machinemanual:Array<CMachineManual>;
    constructor(machine?:{id:number,name:string,description:string,specification:string, illustration:string, machinemanual:Array<CMachineManual>}) {
        if(machine) {
            _.assignIn(this, machine);
        }
    }
}