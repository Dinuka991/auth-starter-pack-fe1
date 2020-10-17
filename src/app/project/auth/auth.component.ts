import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {

  username: string;
  password: string;
  loginservice: any;
  invalidLogin: boolean;

  constructor( private authService: AuthService , private router: Router  ) { }

  ngOnInit() {
  }
  checkLogin() {
    console.log(this.username);
    console.log(this.password);
    console.log(1111111111111111111111111111111111);

  
    if ( this.authService.authenticationservice(this.username, this.password)) {
      console.log(1);
      this.router.navigate(['']);
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }


}
