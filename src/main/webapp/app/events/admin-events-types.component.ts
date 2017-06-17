import {Component} from "@angular/core";
import {IEventType} from "./IEventType";
import {EventsService} from "./events.service";
import {Router} from "@angular/router";
/**
 * Created by Kandel HANAFI on 16/03/2017.
 */
@Component({
    selector: 'admin-eventsTypes',
    templateUrl: './app/events/admin-events-types.html'
})
export class AdminEventsTypesComponent{

    eventTypeToDelete: IEventType;
    eventTypes: Array<IEventType>;

    msg:boolean;

    constructor(private router:Router, private eventsService:EventsService){
        this.eventTypes = [];
        this.eventTypeToDelete = new IEventType();
        this.msg=false;
        this.eventsService.getAllEventType().subscribe((eventTypes:Array<IEventType>)=> this.eventTypes = eventTypes);
    }

    newEventType(){
        this.router.navigate(['admin/events/types/new']);
    }

    updateEventType(id:number){
        this.router.navigate(['admin/events/types/', id]);
    }

    deleteEventType(id:number){
        this.eventsService.getEventType(id).subscribe( (eventType:IEventType) => this.eventTypeToDelete = eventType );
    }

    delete(){
        this.eventsService.deleteEventType(this.eventTypeToDelete.idEventType).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.eventsService.getAllEventType().subscribe( (eventTypes:Array<IEventType>) => this.eventTypes = eventTypes );
            this.router.navigate(['admin/events/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}