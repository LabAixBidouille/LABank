import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Router, ActivatedRoute, Params} from "@angular/router";
import {Location} from "@angular/common";
import {CEventTheme} from "./CEventTheme";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'update-event-theme',
    templateUrl: '../app/events/update-event-theme.html',
    providers: [EventsService]
})
export class UpdateEventThemeComponent{
    eventTheme= new CEventTheme();
    eventThemes = new Array<CEventTheme>();

    constructor(private router:Router, private route:ActivatedRoute, private location:Location,
                private eventsService:EventsService){
        this.eventThemes=[];
    }

    ngOnInit(){
        this.route.params.switchMap((params: Params) => this.eventsService.getEventTheme(+params['id']))
            .subscribe( (eventTheme: CEventTheme) => this.eventTheme = eventTheme );
    }

    updateEventTheme(){
        this.eventsService.updateEventTheme(this.eventTheme).subscribe((eventTheme:CEventTheme) => {
            this.eventTheme = eventTheme;
            this.eventsService.getAllEventTheme().subscribe( (eventThemes:Array<CEventTheme>) => this.eventThemes = eventThemes );
            this.router.navigate(['/admin/events/home']);
        });
    }

    goBack(): void {
        this.location.back();
    }
}