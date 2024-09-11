import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private router:Router){}// this constructor help to signup to login page

  register(registerForm: NgForm) {
    if (registerForm.valid) {
      console.log(registerForm.value);
    } else {
      console.log('Form is invalid');
    }
    this.router.navigate(['/login'])// signup to login page
  }

  reset(registerForm: NgForm) {
    registerForm.reset();
  }
}
