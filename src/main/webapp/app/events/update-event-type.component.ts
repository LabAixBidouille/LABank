import {Component} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {EventsService} from "./events.service";
import {IEventType} from "./IEventType";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'update-event-type',
    templateUrl: '../app/events/update-event-type.html',
    providers: [EventsService]
})
export class UpdateEventTypeComponent{
    eventType= new IEventType();
    eventTypes = new Array<IEventType>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.eventTypes=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getEventType(+params['id']))
            .subscribe( (eventType: IEventType) => this.eventType = eventType );
    }

    updateEventType(){
        this.eventsService.updateEventType(this.eventType).subscribe((eventType:IEventType) => {
            this.eventType = eventType;
            this.eventsService.getAllEventType().subscribe( (eventTypes:Array<IEventType>) => this.eventTypes = eventTypes );
            this.router.navigate(['/admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}