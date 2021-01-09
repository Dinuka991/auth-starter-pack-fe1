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

    let reqIbj = {
      'username': this.username,
      'password': this.password  
    }
    console.log(reqIbj);


   this.authService.login(this.username, this.password).subscribe(
     (data: any) =>{
       if(data){
        this.router.navigate(['']);
        this.invalidLogin = false;
       }
       else{
        this.invalidLogin = true; 
       }
     }
   );

  }


}
