/**
 * Created by Kandel HANAFI on 15/03/17.
 */
import {Component, ViewChild, ViewContainerRef, ComponentFactoryResolver} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, Validators, FormGroup} from '@angular/forms';

import { Location } from '@angular/common';

import {EventsService} from "./events.service";
import {IEvent} from "./IEvent";
import {IEventType} from "./IEventType";
import {CRecurrence} from "./CRecurrence";
import {CEventTheme} from "./CEventTheme";
import {CAgeRange} from "./CAgeRange";
import {EventPricesCategoriesComponent} from "./event-pricesCategories.component";
import {CPricesCategories} from "./CPricesCategories";

@Component({
    selector: 'add-event',
    templateUrl: './app/events/add-event.html',
    providers: [EventsService]
})
export class AddEventComponent{
    public startAt: Date = new Date();
    public endAt: Date = new Date();

    router: Router;
    eventForm:FormGroup;

    event:IEvent;
    eventType:IEventType;
    recurrence: CRecurrence;
    theme:CEventTheme;
    ageRange:CAgeRange;
    pricesCategories:Array<CPricesCategories>;

    illustration:string;
    error:string;
    display:string;

    @ViewChild("pricesCategoriesContainer", { read: ViewContainerRef }) container;

    constructor(router:Router,form: FormBuilder, private eventService:EventsService,
                private location:Location, private resolver: ComponentFactoryResolver){
        this.event = new IEvent();
        this.eventType = new IEventType();
        this.recurrence = new CRecurrence();
        this.theme = new CEventTheme();
        this.ageRange = new CAgeRange();
        this.pricesCategories = [];

        this.router = router;
        this.eventForm = form.group({
            title: ['', Validators.required],
            illustration:"",
            description: ['', Validators.required],
            allDay : ['', Validators.required],
            startDate: ['', Validators.required],
            endDate : ['', Validators.required],
            startAt :"",
            endAt : "",
            endRecurrence : "",
            standardPrice : "",
            reducedFare : "",
            nbTickets : ""
        });
    }

    addEvent(){
        this.event = new IEvent();
        this.event.title = this.eventForm.value.title;
        /*TODO: a supprimer ou à modifier lorsque l'upload de fichier sera implementé */
        if(this.illustration == null){
            this.event.illustration = '../assets/img/events/defaultEvent.png';
        }else{
            this.event.illustration = this.illustration;
        }
        /*FIN TODO*/
        this.event.description = this. eventForm.value.description ;
        this.event.idEventType = this.eventType.idEventType ;
        this.event.allDay = this.eventForm.value.allDay ;
        this.event.startDate = this.eventForm.value.startDate ;
        this.event.endDate = this.eventForm.value.endDate ;

        this.event.startAt = this.startAt;
        this.event.endAt = this.endAt;
        this.event.idRecurrence = this.recurrence.idRecurrence;

        this.event.standardPrice = this.eventForm.value.standardPrice ;
        this.event.reducedFare = this.eventForm.value.reducedFare ;
        this.event.nbTickets = this.eventForm.value.nbTickets ;

        this.event.idEventTheme = this.theme.idEventTheme;
        this.event.idAgeRange = this.ageRange.idAgeRange;

        this.eventService.saveEvent(this.event).subscribe((event:IEvent) => {
            this.event = event
            this.router.navigate(['admin/events/home']);
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

    getTheme(theme:CEventTheme){
        this.theme = theme;
    }

    getAgeRange(ageRange:CAgeRange){
        this.ageRange = ageRange;
    }

    addPricesCategories(){
        let factory= this.resolver.resolveComponentFactory(EventPricesCategoriesComponent);
        let componentRef = this.container.createComponent(factory);

        componentRef.instance.pricesCategorySelected.subscribe( (pricesCategory:CPricesCategories)=>{
            if(pricesCategory){
                pricesCategory.usageCount= pricesCategory.usageCount + 1;
                this.pricesCategories.push(pricesCategory);
            }
        });
    }

    goBack(): void {
        this.location.back();
    }
}