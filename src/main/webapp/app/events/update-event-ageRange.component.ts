import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {CAgeRange} from "./CAgeRange";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'update-event-ageRange',
    templateUrl: '../app/events/update-event-ageRange.html',
    providers: [EventsService]
})
export class UpdateEventAgeRangeComponent{
    ageRange= new CAgeRange();
    ageRanges = new Array<CAgeRange>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.ageRanges=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getAgeRange(+params['id']))
            .subscribe( (ageRange: CAgeRange) => this.ageRange = ageRange );
    }

    updateAgeRange(){
        this.eventsService.updateAgeRange(this.ageRange).subscribe((ageRange:CAgeRange) => {
            this.ageRange = ageRange;
            this.eventsService.getAllAgeRange().subscribe( (ageRanges:Array<CAgeRange>) => this.ageRanges = ageRanges );
            this.router.navigate(['/admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}