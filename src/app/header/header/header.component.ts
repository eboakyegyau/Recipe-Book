import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {

  private userSub: Subscription;

  isAuthenticated = false;

  constructor(private authenticationService:AuthenticationService, private router: Router) { }

  ngOnInit(): void {

    this.userSub = this.authenticationService.user.subscribe( user => {
      this.isAuthenticated = !user ? false : true;
    });
  }

  ngOnDestroy(): void {

    this.userSub.unsubscribe();
  }

  onLogOut() {

    this.authenticationService.logOut();
    this.router.navigate(['/login'])
  }

}
