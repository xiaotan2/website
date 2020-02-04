import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private fireAuth : AngularFireAuth) { }

  signInAnonymously() {
    this.fireAuth.auth.signInAnonymously().catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;

      if (errorCode === 'auth/operation-not-allowed') {
        alert('You must enable Anonymous auth in the Firebase Console.');
      } else {
        console.error(error);
      }
    })
  }

  signInWithEmailAndPassword() {
    this.fireAuth.auth.signInWithEmailAndPassword("testuser_135@testemail.com", "a1b2c3").catch(function(error) {
      // Handle Errors here.
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      if (errorCode === 'auth/wrong-password') {
        alert('Wrong password.');
      } else {
        alert(errorMessage);
      }
      console.log(error);
    })
  }

  signOut() {
    this.fireAuth.auth.signOut()
  }
}
