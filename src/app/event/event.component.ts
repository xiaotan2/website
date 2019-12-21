import { Component, Input, OnInit } from '@angular/core';
import { FirestoreService } from '../shared/firestore.service';

@Component({
    selector: 'app-event',
    templateUrl: './event.component.html',
    styleUrls: ['./event.component.css']
})

export class EventComponent implements OnInit {

    @Input() set eventInput(eventInput: any) {
        this.name = eventInput.payload.doc.data().name;
        this.date = eventInput.payload.doc.data().date;
        this.description = eventInput.payload.doc.data().description;
        this.imageId = eventInput.payload.doc.data().imageId;
        this.link = eventInput.payload.doc.data().link;
    }

    constructor() { }

    name;
    date;
    description;
    imageId;
    link;

    ngOnInit() {
    }
}
