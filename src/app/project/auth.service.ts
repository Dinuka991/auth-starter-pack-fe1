import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  testApi() {
     return this.http.get('http://localhost:8080/resource');
  }

  authenticationservice(username , password) {
       if (( username == 'sanath') && (password == '123')) {
          console.log(username);
          console.log(password);
          sessionStorage.setItem('username', username);
          console.log(sessionStorage.getItem('username'))
          return true;
       }
       return false;
  }

  isLogin(){

    let user = sessionStorage.getItem('username');
    console.log(user)
    console.log(!(user === null));
    return !(user === null );
  }

  logout(){
    sessionStorage.removeItem('username');
  }

}
