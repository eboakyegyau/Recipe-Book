import { AuthenticationService } from './../../services/authentication.service';
import { SocialAuthService } from "angularx-social-login";
import {  FacebookLoginProvider,GoogleLoginProvider, SocialUser } from 'angularx-social-login';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;
  user: SocialUser;
  loggedIn: boolean;

  constructor(private authservice: AuthenticationService, private router: Router, private authService: SocialAuthService) { }

  onClickFacebook() {

    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID);
  }

  onClickGoogle() {

    this.authService.signIn(GoogleLoginProvider.PROVIDER_ID);
  }

  signOut(): void {

    this.authService.signOut();
  }

  onSubmit(form: NgForm) {

    if(!form.valid) {
        return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;
    const displayName = form.value.fullname;

    this.authservice.signUp( email, password).subscribe( resData => {
      console.log(resData);
      this.isLoading = false;
      this.router.navigate(['./homepage']);
    },

      error => {
        console.log(error);
        this.isLoading = false;
      }

    );

    form.reset();
  }

}
