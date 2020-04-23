import { Injectable } from '@angular/core';
import { UsersService } from './users.service';
import { Router, CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AdminAuthGuard implements CanActivate {

  constructor(private userService: UsersService, private router: Router) { }

  canActivate() {
    const user = this.userService.currentUser;
    if ( user && user.role === 'admin') {
      return true;
    }
    this.router.navigate(['/no-access']);
    return false;
  }
}
