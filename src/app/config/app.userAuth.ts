import { Injectable } from '@angular/core';
import { Router,CanActivate } from '@angular/router';
import { AutService } from '../services/app.auth.service';

@Injectable()
export class LoggedInGuard implements CanActivate {
  private _user:AutService;
  constructor(private user: AutService,private router: Router) {
    this._user = user;
  }

  canActivate() {
    if(this._user.isLoggedIn()){
      return true;
    }
    this.router.navigate(['/Login']);
    return false;
  }
}