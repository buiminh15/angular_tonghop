import { Component, OnInit } from '@angular/core';
import { UsersService } from 'src/app/shared/users.service';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { convertToJSON } from '../../shared/utils'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email: string;
  password: string;
  constructor(private service: UsersService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit(form: NgForm) {
    const user = {
      email: this.email,
      password: this.password,
    }
    if (form.valid) {
      this.service.login(user).subscribe(res => {
        alert('Done')
        this.router.navigate(['/tours']);
      },
        err => {
          alert(err.error.message);
        }
      );
    }
  }
}
