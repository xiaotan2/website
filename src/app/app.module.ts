import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';

import { environment } from "src/environments/environment";

import { RouterModule, Routes } from '@angular/router';

import { FirestoreService } from './shared/firestore.service';
import { AuthService } from './shared/auth.service';

import { AppComponent } from './app.component';
import { EventComponent } from './event/event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { TimelineComponent } from './timeline/timeline.component';
import { UsersComponent } from './users/users.component';

// Routes
const appRoutes: Routes = 
[
//  { path: 'crisis-center', component: CrisisListComponent },
//  { path: 'hero/:id',      component: HeroDetailComponent },
//  {
//    path: 'heroes',
//    component: HeroListComponent,
//    data: { title: 'Heroes List' }
//  },
//  { path: '',
//    redirectTo: '/heroes',
//    pathMatch: 'full'
//  },
//  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    EventComponent,
    AddEventComponent,
    TimelineComponent,
    UsersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing : true}
    ),
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireStorageModule,
    AngularFirestoreModule,
    AngularFireAuthModule
  ],
  providers: [
    FirestoreService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
