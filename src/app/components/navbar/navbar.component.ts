import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';
import { Router } from '@angular/router';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    public af: AngularFire,
    private router : Router,
    private flashMessage: FlashMessagesService
  ) { }

  ngOnInit() {
  }

  public login(){
    this.af.auth.login();
  }

  logout(){
    this.router.navigate(['/']);
    this.af.auth.logout();    
    this.flashMessage.show('You are logout', {
      cssClass:'alert-success',
      timeout: 3000
    })
  }

}
