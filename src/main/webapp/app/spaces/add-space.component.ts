import {Component} from "@angular/core";
import {SpaceService} from "./space.service";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {Router} from "@angular/router";
import {CSpace} from "./CSpace";
/**
 * Created by Kandel on 03/05/2017.
 */
@Component({
    selector: 'add-space',
    templateUrl: '../app/spaces/add-space.html',
    providers: [SpaceService]
})
export class AddSpaceComponent{
    space:CSpace;
    spaceForm:FormGroup;

    illustration:string;

    constructor(private router:Router, private form:FormBuilder, private location:Location,
                private spaceService:SpaceService){
        this.space = new CSpace();

        this.spaceForm = this.form.group({
            name:['', Validators.required] ,
            illustration: "",
            maxTickets:"",
            description: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(750)])],
            characteristic: ['', Validators.compose([Validators.required, Validators.minLength(5), Validators.maxLength(750)])],
        })
    }

    addSpace(){
        this.space = new CSpace();
        this.space.name = this.spaceForm.value.name;
        if(this.illustration == null){
            this.space.illustration = '../assets/img/spaces/DefaultSpace.jpg';
        }else{
            this.space.illustration = this.illustration;
        }
        this.space.maxTickets = this.spaceForm.value.maxTickets;
        this.space.description = this.spaceForm.value.description;
        this.space.characteristic = this.spaceForm.value.characteristic;
        this.spaceService.saveSpace(this.space).subscribe((space:CSpace) => {
            this.space = space;
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
