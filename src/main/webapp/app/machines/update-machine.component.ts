import {Component, NgZone} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {Location} from "@angular/common";


import {MachinesService} from "./machines.service";
import {IMachine} from "./IMachine";
/**
 * Created by Kandel HANAFI on 17/03/2017.
 */
@Component({
    selector: 'update-machine',
    templateUrl: './app/machines/update-machine.html',
    providers:[MachinesService]
})
export class UpdateMachineComponent{

    machine = new IMachine();
    machines:Array<IMachine>;

    illustration:string;

    constructor(private router:Router, private route:ActivatedRoute,private location:Location,
                private machinesService:MachinesService, private ngZone:NgZone){
        this.machines = [];
        this.illustration = "";
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.machinesService.getById(+params['id']))
            .subscribe( (machine: IMachine) => this.machine = machine );
    }

    updateMachine(){
        if(this.illustration == null){
            this.machine.illustration = '../assets/img/machines/DefaultMachine.png';
        }else{
            this.machine.illustration = this.illustration;
        }
        this.machinesService.updateMachine(this.machine).subscribe((machine:IMachine) => {
            this.machine = machine;
            this.machinesService.getAll().subscribe( (machines:Array<IMachine>) => this.machines = machines );
            this.router.navigate(['/admin/machines']);
        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/machines/'+ illustration;
    }

    goBack(): void {
        this.location.back();
    }

}