import {OnInit, Component} from "@angular/core";

@Component({
    selector:'LabankAgenda',
    templateUrl: './app/calendar/labankAgenda.html',
})

export class LabankAgenda implements OnInit {

    private idCalendar = '#calendar';

    calendarOptions: any = {
        height: 'parent',
        fixedWeekCount : false,
        defaultDate: '2017-09-12',
        editable: true,
        eventLimit: true, // allow "more" link when too many events
        header: {
            left:   'today prev,next',
            center: 'title',
            right:  'month basicWeek basicDay'
        },
        events: []
    };

    constructor(){}
    private apiEvent = [
        {
            title: 'All Day Event',
            start: '2017-09-01'
        },
        {
            title: 'Long Event',
            start: '2016-09-07',
            end: '2017-09-10'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-09T16:00:00'
        },
        {
            id: 999,
            title: 'Repeating Event',
            start: '2017-09-16T16:00:00'
        },
        {
            title: 'Conference',
            start: '2017-09-11',
            end: '2017-09-13'
        },
        {
            title: 'Meeting',
            start: '2017-09-12T10:30:00',
            end: '2017-09-12T12:30:00'
        },
        {
            title: 'Lunch',
            start: '2017-09-12T12:00:00'
        },
        {
            title: 'Meeting',
            start: '2017-09-12T14:30:00'
        },
        {
            title: 'Happy Hour',
            start: '2017-09-12T17:30:00'
        },
        {
            title: 'Dinner',
            start: '2017-09-12T20:00:00'
        },
        {
            title: 'Birthday Party',
            start: '2017-09-13T07:00:00'
        },
        {
            title: 'Click for Google',
            url: 'http://google.com/',
            start: '2017-09-28'
        }]

    ngOnInit(): void {
        this.apiEvent.forEach(event => this.calendarOptions.events.push(event));
        $(this.idCalendar).fullCalendar(this.calendarOptions);
    }

    updateEvent(event) {
        return $(this.idCalendar).fullCalendar('updateEvent', event);
    }

    clientEvents(idOrFilter) {
        return $(this.idCalendar).fullCalendar('clientEvents', idOrFilter);
    }

}
