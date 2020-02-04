import { Component, OnDestroy, ElementRef, AfterViewInit, OnInit, ViewChild} from '@angular/core';
import { AuthService  } from './shared/auth.service'
import * as M from "materialize-css/dist/js/materialize";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit, AfterViewInit, OnDestroy{
  title = 'learn';
  showMenu = false;
  darkModeActive: boolean;

  userEmail = '';

  @ViewChild('modal', {static: false}) elModal: ElementRef;

  constructor(private authService : AuthService) {}

  ngOnInit() {
    // By default sign in user anonymously
    this.authService.signInAnonymously();
  }

  ngAfterViewInit() {
    let instanceModal = new M.Modal(this.elModal.nativeElement, {});
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  ngOnDestroy() {}

  logout() {}

  modeToggleSwitch() {}

}
