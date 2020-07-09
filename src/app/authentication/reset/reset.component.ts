import { AuthenticationService } from './../../services/authentication.service';
import { Component } from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-reset',
  templateUrl: './reset.component.html',
  styleUrls: ['./reset.component.css']
})
export class ResetComponent {

  constructor(private authservice: AuthenticationService) { }

  onSubmit(form: NgForm) {

    if(!form.valid) {
        return;
    }

    const email = form.value.email;
    const password = form.value.password;

    this.authservice.reset( email).subscribe( resData => {
      console.log(resData);
    },

      error => {
        console.log(error);
      }

    );

    form.reset();
  }

}
