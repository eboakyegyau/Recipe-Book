import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from './services/authentication.service';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Auto-Handler';

  constructor(private authenticationService: AuthenticationService){}

  ngOnInit() {
    this.authenticationService.autoLogin();
  }
}
