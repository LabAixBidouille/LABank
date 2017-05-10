import {Component, OnInit} from "@angular/core";
import {CSpace} from "./CSpace";
import {SpaceService} from "./space.service";
import {ActivatedRoute, Params} from "@angular/router";

/**
 * Created by Kandel on 03/05/2017.
 */
@Component({
    selector : 'space',
    templateUrl: '../app/spaces/space.html'
})
export class SpaceComponent implements OnInit{
    space:CSpace;

    constructor(private spaceService:SpaceService, private route:ActivatedRoute){
        this.space = new CSpace();
    }

    ngOnInit(){
        this.route.params.switchMap ((params:Params)=> this.spaceService.getSpace(+params['id']))
            .subscribe((space:CSpace)=>this.space = space);
    }
}