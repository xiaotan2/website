import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from "@angular/forms";
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
    providedIn: 'root'
})

export class FirestoreService {

    collectionName = 'events'
    cacheDirty;
    eventsCache;
 
    constructor(private firestore : AngularFirestore) { 
        this.cacheDirty = true;
    }

    createEvent(data) {
        return new Promise<any>((resolve, reject) => {
            this.firestore
                .collection(this.collectionName)
                .add(data)
                .then( res => {}, err => reject(err));
            this.cacheDirty = true;
        });
    }

    getEvents() {
        if(this.cacheDirty) {
            this.eventsCache = this.getEventsFromDb();
        }
        return this.eventsCache;
    }

    getEventsFromDb() {
        return this.firestore.collection(this.collectionName).snapshotChanges();
    }

    updateEvent(data) {
        this.cacheDirty = true;
        return this.firestore
                   .collection(this.collectionName)
                   .doc(data.payload.doc.id)
                   .set({ completed : true}, {merge : true });
    }
  
    deleteEvent(data) {
        this.cacheDirty = true;
        return this.firestore
                   .collection(this.collectionName)
                   .doc(data.payload.doc.id)
                   .delete();
    }
}