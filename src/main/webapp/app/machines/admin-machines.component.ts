import {Component, NgZone} from "@angular/core";
import {MachinesService} from "./machines.service";
import {Router} from "@angular/router";
import {IMachine} from "./IMachine";
/**
 * Created by Kandel HANAFI on 17/03/2017.
 */

@Component({
    selector:'admin-machines',
    templateUrl:'./app/machines/admin-machines.html',
    providers:[MachinesService]
})
export class AdminMachinesComponent{
    machineToDelete:IMachine;
    machines:Array<IMachine>;

    msg:boolean; /* booleen permettant de connaitre le succes ou l'echec de la suppression de la machine */

    constructor(private router: Router, private ngZone: NgZone, private machinesService:MachinesService ){
        this.machineToDelete = new IMachine();
        this.machines = [];
        this.msg= false;
        this.machinesService.getAll().subscribe( (machines:Array<IMachine>) => this.machines = machines);
    }

    newMachine(){
        this.router.navigate(['admin/machines/new']);
    }

    updateMachine(id:number){
        this.router.navigate(['admin/machines/',id]);
    }

    deleteMachine(id:number){
        this.machinesService.getById(id).subscribe( (machine:IMachine) => this.machineToDelete = machine);
    }

    delete(){
        this.machinesService.deleteMachine(this.machineToDelete.id).subscribe( (msg:boolean) => this.msg = msg );

        /*Permets de rafraichir la liste des machines apres une suppression*/
        this.ngZone.run(() => { this.machinesService.getAll().
            subscribe( (machines:Array<IMachine>) => {
                this.machines = machines;
                this.router.navigate(['admin/machines']);
        } ); });


    }

    closeAlert(){
        this.msg = false;
    }
}

