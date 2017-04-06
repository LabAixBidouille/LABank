import {CStep} from "./CStep";
import {Account} from "../account/account";
import {IMachine} from "../machines/IMachine";
import {CMaterial} from "./CMaterial";
import {CProjectFile} from "./CProjectFile";
/**
 * Created by Kandel HANAFI on 29/03/2017.
 */
export class CProject{
    idProject:number;
    name:string;
    illustration:string;
    idLicence:number;
    tags:string;
    publish:boolean;
    description:string
    collaborators:Array<Account>;
    projectsMachines:Array<IMachine>;
    projectsMaterials:Array<CMaterial>;
    projectFiles:Array<CProjectFile>;
    projectSteps:Array<CStep>;
    constructor(project?:{idProject:number,name:string,illustration:string,idLicence:number,tags:string,publish:boolean,
        description:string,collaborators:Array<Account>,projectsMachines:Array<IMachine>,projectsMaterials:Array<CMaterial>,
        projectFiles:Array<CProjectFile>,projectSteps:Array<CStep>}){
        if(project){
            _.assignIn(this,project);
        }
    }
}