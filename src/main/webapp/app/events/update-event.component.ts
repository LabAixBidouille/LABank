import {Component, OnInit} from "@angular/core";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";

import {EventsService} from "./events.service";
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";
import {CRecurrence} from "./CRecurrence";
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
    eventType:IEventType;
    recurrence:CRecurrence;

    illustration:string;

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.events=[];
        this.eventType = new IEventType();
        this.recurrence = new CRecurrence();
        this.illustration ="";
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getEvent(+params['id']))
            .subscribe( (event: IEvent) => {
                this.event = event;
                this.illustration = this.event.illustration;
            } );
    }

    updateEvent(){
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.illustration == null){
            this.event.illustration = '../assets/img/events/defaultEvent.png';
        }else{
            this.event.illustration = this.illustration;
        }
        /*FIN TODO*/
        this.event.idEventType = this.eventType.idEventType;
        this.event.idRecurrence = this.recurrence.idRecurrence;

        this.eventsService.updateEvent(this.event).subscribe((event:IEvent) => {
            this.event = event;
            this.eventsService.getEventsListByCategory(0).subscribe( (events:Array<IEvent>) => this.events = events );
            this.router.navigate(['/admin/events/home']);
        });
    }

    getIllustration(illustration:string){
        this.illustration = '../assets/img/events/'+ illustration;
    }

    getEventType(eventType:IEventType){
        this.eventType = eventType;
    }

    getRecurrence(recurrence:CRecurrence){
        this.recurrence = recurrence;
    }

    goBack(): void {
        this.location.back();
    }
}