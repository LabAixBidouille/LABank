import {Component} from "@angular/core";
import {SpaceService} from "./space.service";
import {CSpace} from "./CSpace";
import {Router} from "@angular/router";
/**
 * Created by Kandel on 03/05/2017.
 */
@Component({
    selector: 'spaces',
    templateUrl: '../app/spaces/spaces.html',
    providers: [SpaceService]
})
export class SpacesComponent{
    spaces:Array<CSpace>
    router:Router;

    constructor(router:Router, spaceService:SpaceService){
        this.spaces=[]
        this.router = router;
        spaceService.getAll().subscribe((spaces:Array<CSpace>)=>this.spaces = spaces);

    }

    showSpace(id:number){
        this.router.navigate(['/spaces',id]);
    }

    bookSpace(){}
}
