import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  {

  isLoading = false;

  constructor(private authservice: AuthenticationService) { }

  onSubmit(form: NgForm) {

    if(!form.valid) {
        return;
    }

    this.isLoading = true;
    const email = form.value.email;
    const password = form.value.password;

    this.authservice.logIn( email, password).subscribe( resData => {
      console.log(resData);
      this.isLoading = false;
    },

      error => {
        console.log(error);
        this.isLoading = false;
      }

    );

    form.reset();
  }

}

