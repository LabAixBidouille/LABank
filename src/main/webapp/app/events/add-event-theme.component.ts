import {Component} from "@angular/core";
import {EventsService} from "./events.service";
import {Router} from "@angular/router";
import {FormGroup, FormBuilder, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {CEventTheme} from "./CEventTheme";
/**
 * Created by Kandel on 24/05/2017.
 */
@Component({
    selector: 'add-event-theme',
    templateUrl: '../app/events/add-event-theme.html',
    providers: [EventsService]
})
export class AddEventThemeComponent{
    router: Router;
    eventThemeForm:FormGroup;

    eventTheme:CEventTheme;

    constructor(router:Router,form: FormBuilder, private eventsService:EventsService, private location:Location){
        this.eventTheme = new CEventTheme();

        this.router = router;
        this.eventThemeForm = form.group({ name: ['', Validators.required] });
    }

    addEventTheme(){
        this.eventTheme = new CEventTheme();
        this.eventTheme.name = this.eventThemeForm.value.name;

        this.eventsService.saveEventTheme(this.eventTheme).subscribe((eventTheme:CEventTheme) => {
            this.eventTheme = eventTheme;
            this.router.navigate(['admin/events/home']);
        });

    }

    goBack(): void {
        this.location.back();
    }
}