import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ToursService } from 'src/app/shared/tours.service';
import { UsersService } from 'src/app/shared/users.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  name: string;
  email: string;
  password: string;
  passwordConfirm: string;

  constructor(private service: UsersService) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const newUser = {
      name: this.name,
      email: this.email,
      password: this.password,
      passwordConfirm: this.passwordConfirm
    }
    if (form.valid) {
      this.service.signup(newUser).subscribe(() => {
        alert('Done');
      },
      err => {
        alert(err.error.message);
      }
      );
    }
  }
}
