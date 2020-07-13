import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  isLoading = false;

  constructor(private authservice: AuthenticationService) { }

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
    },

      error => {
        console.log(error);
        this.isLoading = false;
      }

    );

    form.reset();
  }

}
