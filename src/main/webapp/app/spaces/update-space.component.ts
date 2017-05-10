import {Component, OnInit} from "@angular/core";
import {SpaceService} from "./space.service";
import {CSpace} from "./CSpace";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Location} from "@angular/common";
/**
 * Created by Kandel on 03/05/2017.
 */
@Component({
    selector: 'update-space',
    templateUrl: '../app/spaces/update-space.html',
    providers: [SpaceService]
})
export class UpdateSpaceComponent implements OnInit{
    space = new CSpace();
    spaces:Array<CSpace>;

    illustration:string;

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private spaceService:SpaceService){
        this.space = new CSpace();
        this.illustration = "";
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.spaceService.getSpace(+params['id']))
            .subscribe( (space: CSpace) => this.space = space );
    }

    updateSpace(){
        if(this.illustration == null){
            this.space.illustration = '../assets/img/spaces/DefaultSpace.jpg';
        }else{
            this.space.illustration = this.illustration;
        }
        this.spaceService.updateSpace(this.space).subscribe((space:CSpace) => {
            this.space = space;
            this.spaceService.getAll().subscribe( (spaces:Array<CSpace>) => this.spaces = spaces );
            this.router.navigate(['/admin/spaces']);
        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/spaces/'+ illustration;
    }

    goBack(): void {
        this.location.back();
    }
}
