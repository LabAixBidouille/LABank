import {Component, OnInit, NgZone} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {FormBuilder} from "@angular/forms";
import {Location} from "@angular/common";

import {EventsService} from "./events.service";
import {IEvent} from "./IEvent";
/**
 * Created by Kandel HANAFI on 15/03/17.
 */
@Component({
    selector: 'update-event',
    templateUrl: './app/events/update-event.html'
})
export class UpdateEventComponent implements OnInit{

    event= new IEvent();
    events:Array<IEvent>;

    picture:string;

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService, private ngZone:NgZone){
        this.events=[];
        this.picture ="";
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getEvent(+params['id']))
            .subscribe( (event: IEvent) => this.event = event );
    }

    updateEvent(){
        this.event.picture = this.picture;
        this.eventsService.updateEvent(this.event).subscribe((event:IEvent) => this.event = event);
        this.ngZone.run(() => { this.eventsService.getEventsListByCategory(0).
            subscribe( (events:Array<IEvent>) => this.events = events ); });
        this.router.navigate(['/admin/events']);
    }

    getPicture(picture:string){
        this.picture = '../assets/img/events/'+ picture;
    }

    goBack(): void {
        this.location.back();
    }
}