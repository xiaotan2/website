import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from '@angular/fire/storage';

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
        this.imageUrl = null;
    }

    constructor(private fireStorage : AngularFireStorage) { }

    name;
    date;
    description;
    imageId;
    link;
    imageUrl;

    ngOnInit() {
        var imageSplits = this.imageId.split(".");
        var imagePath = "timeline/" + imageSplits[0] + "_t." + imageSplits[1];
        this.imageUrl = this.fireStorage.ref(imagePath).getDownloadURL();
    }
}
