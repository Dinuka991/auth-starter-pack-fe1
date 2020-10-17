import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService  implements CanActivate {

  constructor(private authService: AuthService , private router: Router)  { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isLogin()) {
      console.log(this,this.authService.isLogin);
      return true;
    }

    this.router.navigate(['login']);
    return false;

  }
}
