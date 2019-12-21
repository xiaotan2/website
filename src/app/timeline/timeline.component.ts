import { Component, OnInit } from '@angular/core';
import { FirestoreService } from '../shared/firestore.service'
import { map } from 'rxjs/operators';

@Component({
    selector: 'app-timeline',
    templateUrl: './timeline.component.html',
    styleUrls: ['./timeline.component.css']
})

export class TimelineComponent implements OnInit {

    constructor(private firestoreService : FirestoreService) { }

    datelist;
    eventlist;

    ngOnInit() {
        this.getEvents();
    }

    getEvents = () =>
        this.firestoreService
            .getEvents()
            .subscribe( res => {
                this.eventlist = res
                this.datelist = res.map(
                    event => (this.timestampToDate(event.payload.doc.data().date.toDate())))
            });

    markCompleted = data =>
        this.firestoreService
            .updateEvent(data);

    deleteEvent = data => this.firestoreService.deleteEvent(data);

    addEvent = event => this.eventlist.push(event);

    removeEvent = event => {
        let index = this.eventlist.indexOf(event);
        if (index > -1) this.eventlist.splice(index, 1);
    };

    timestampToDate(date : Date) {
        let month = '' + (date.getMonth() + 1);
        let day = '' + date.getDate();
        let year = '' + date.getFullYear();
        if(month.length < 2) {
            month = '0' + month
        }
        if(day.length < 2) {
            day = '0' + day
        }
        return [year, month, day].join('-');
    }
}
