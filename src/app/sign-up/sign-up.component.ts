import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { User } from '../models/user.model';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  user: User = new User();

  onSubmit(signupForm: NgForm) {
    if (signupForm.valid) {
      console.log(this.user);
    }
  }
}
