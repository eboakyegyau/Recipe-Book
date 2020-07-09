import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private authservice: AuthenticationService) { }

  onSubmit(form: NgForm) {

    if(!form.valid) {
        return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.authservice.signUp( email, password).subscribe( resData => {
      console.log(resData);
    },

      error => {
        console.log(error);
      }

    );

    form.reset();
  }

}
