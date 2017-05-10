import {Component} from "@angular/core";
import {SpaceService} from "./space.service";
import {CSpace} from "./CSpace";
import {Router} from "@angular/router";
/**
 * Created by Kandel on 03/05/2017.
 */
@Component({
    selector: 'admin-spaces',
    templateUrl: '../app/spaces/admin-spaces.html',
    providers: [SpaceService]
})
export class AdminSpacesComponent{
    spaceToDelete:CSpace;
    spaces:Array<CSpace>;

    msg:boolean; /* booleen permettant de connaitre le succes ou l'echec de la suppression de la machine */

    constructor(private router:Router, private spaceService:SpaceService){
        this.spaceToDelete = new CSpace();
        this.spaces = [];
        this.msg= false;
        this.spaceService.getAll().subscribe((spaces:Array<CSpace>) => this.spaces = spaces);
    }

    newSpace(){
        this.router.navigate(['admin/spaces/new']);
    }

    updateSpace(id:number){
    this.router.navigate(['admin/spaces/',id]);
    }

    deleteSpace(id:number){
        this.spaceService.getSpace(id).subscribe( (space:CSpace) => this.spaceToDelete = space);
    }

    delete(){
        this.spaceService.deleteSpace(this.spaceToDelete.idSpace).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.spaceService.getAll().subscribe( (spaces:Array<CSpace>) => this.spaces = spaces);
            this.router.navigate(['admin/spaces']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }

}