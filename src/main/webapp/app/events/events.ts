/**
 * Created by kprim on 02/03/2017.
 */
import {Component} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {EventsService} from './events.service';
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";
import {CEventTheme} from "./CEventTheme";
import {CAgeRange} from "./CAgeRange";

@Component({
    selector: 'events',
    templateUrl: './app/events/events.html',
    providers:[EventsService]
})

export class Events {
    events:Array<IEvent>;
    router: Router;
    theme:CEventTheme;
    ageRange: CAgeRange;
    private sub:any;

    constructor(router: Router, private eventsService:EventsService, private route: ActivatedRoute) {
        this.events = [];
        this.theme = new CEventTheme();
        this.router = router;
        this.eventsService = eventsService;
    }

    ngOnInit():void {
        this.sub = this.route.params.subscribe(params => this.getEventListByCat(+params['id']));

    }

    getEventListByCat(id:number):void {
        this.eventsService.getEventsListByCategory(id).subscribe((events:Array<IEvent>) => this.events = events);
    }

    showEvent(id:number){
        this.router.navigate(['/events',id]);
    }


    getTheme(theme:CEventTheme){
        this.theme = theme;
        if((this.ageRange == null) || (this.ageRange.idAgeRange != 1)){
            console.log(this.theme);
        }
        this.eventsService.getEventsListByTheme(this.theme.idEventTheme).
            subscribe((events:Array<IEvent>) => this.events = events);
    }

    getAgeRange(ageRange:CAgeRange){
        this.ageRange = ageRange;
        if(this.theme.idEventTheme != null){
            this.eventsService.getEventsListByThemeAndAgeRange(this.theme.idEventTheme,this.ageRange.idAgeRange).
            subscribe((events:Array<IEvent>) => this.events = events);
        }
    }
}