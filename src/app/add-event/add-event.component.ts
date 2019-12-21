import { Component, OnInit, ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import * as M from "materialize-css/dist/js/materialize";
import { FirestoreService } from '../shared/firestore.service'

@Component({
    selector: 'app-add-event',
    templateUrl: './add-event.component.html',
    styleUrls: ['./add-event.component.css']
})

export class AddEventComponent implements OnInit {

    constructor(private firestoreService : FirestoreService) { }

    @ViewChild('datepicker', {static: false}) dpModal: ElementRef;

    form = new FormGroup({        
        name: new FormControl(''),
        date: new FormControl(''),
        description: new FormControl(''), 
        imageId: new FormControl(''),
        link: new FormControl('')
    })

    coffees = ["Americano", "Flat White", "Cappuccino", "Latte", "Espresso", "Machiato", "Mocha", "Hot Chocolate", "Tea"];

    ngOnInit() {
    }

    ngAfterViewInit() {
        let instanceModal = new M.Datepicker(this.dpModal.nativeElement, {});
    }

    onSubmit() {
        let data = this.form.value;

        this.firestoreService.createEvent(data)
            .then( res => {
                // do something like clear the form or print success message
            });
    }

}
