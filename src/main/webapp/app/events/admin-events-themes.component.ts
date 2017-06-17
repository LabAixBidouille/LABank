import {Component} from "@angular/core";
import {CEventTheme} from "./CEventTheme";
import {Router} from "@angular/router";
import {EventsService} from "./events.service";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'admin-eventsThemes',
    templateUrl: '../app/events/admin-events-themes.html'
})
export class AdminEventsThemesComponent{

    eventThemeToDelete: CEventTheme;
    eventThemes: Array<CEventTheme>;

    msg:boolean;

    constructor(private router:Router, private eventsService:EventsService){
        this.eventThemes = [];
        this.eventThemeToDelete = new CEventTheme();
        this.msg=false;
        this.eventsService.getAllEventTheme().subscribe((eventThemes:Array<CEventTheme>)=> this.eventThemes = eventThemes);
    }

    newTheme(){
        this.router.navigate(['admin/events/themes/new']);
    }

    updateTheme(id:number){
        this.router.navigate(['admin/events/themes/', id]);
    }

    deleteTheme(id:number){
        this.eventsService.getEventTheme(id).subscribe( (eventTheme:CEventTheme) => this.eventThemeToDelete = eventTheme );
    }

    delete(){
        this.eventsService.deleteEventTheme(this.eventThemeToDelete.idEventTheme).subscribe( (msg:boolean) => {
            this.msg = msg;
            this.eventsService.getAllEventTheme().subscribe( (eventThemes:Array<CEventTheme>) => this.eventThemes = eventThemes );
            this.router.navigate(['admin/events/home']);
        } );
    }

    closeAlert(){
        this.msg = false;
    }
}