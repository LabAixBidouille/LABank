import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {CAgeRange} from "./CAgeRange";
import {Router} from "@angular/router";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'admin-eventsAgeRanges',
    templateUrl: '../app/events/admin-events-ageRanges.html'
})
export class AdminEventsAgeRangesComponent{
    ageRangeToDelete: CAgeRange;
    ageRanges: Array<CAgeRange>;

    msg:boolean;

    constructor(private router:Router, private eventsService:EventsService){
        this.ageRanges = [];
        this.ageRangeToDelete = new CAgeRange();
        this.msg=false;
        this.eventsService.getAllAgeRange().subscribe((ageRanges:Array<CAgeRange>)=> this.ageRanges = ageRanges);
    }

    newAgeRange(){
        this.router.navigate(['admin/events/ageRanges/new']);
    }

    updateAgeRange(id:number){
        this.router.navigate(['admin/events/ageRanges/', id]);
    }

    deleteAgeRange(id:number){
        this.eventsService.getAgeRange(id).subscribe( (ageRange:CAgeRange) => this.ageRangeToDelete = ageRange );
    }

    delete(){
        this.eventsService.deleteAgeRange(this.ageRangeToDelete.idAgeRange).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.eventsService.getAllAgeRange().subscribe( (ageRanges:Array<CAgeRange>) => this.ageRanges = ageRanges );
            this.router.navigate(['admin/events/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }}