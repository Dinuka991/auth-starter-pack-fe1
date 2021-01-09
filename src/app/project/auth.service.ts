import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor( private http: HttpClient) { }

  testApi() {
    console.log('ddd');
     return this.http.get('https://jsonplaceholder.typicode.com/posts');
  }


  authenticationserviceWithJWT(obj: any) {

   console.log('sss');
   console.log(obj);
    return this.http.post<any>('localhost:4000/users/authenticate', obj).subscribe(
      (data: any) => {
        console.log(data);
        console.log('sss');
        if(data.token){
          sessionStorage.setItem('user', JSON.stringify(data) )
          return true;
        }else{
          return false;
        }
      }
    
    )

}

login(username: string, password: string) {
  console.log('login')
  console.log({username,password})
  return this.http.post<any>('http://localhost:4000/users/authenticate', { username, password })
      .pipe(map(user => {
        console.log(user)
          // login successful if there's a jwt token in the response
          if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('user', JSON.stringify(user));
              console.log(JSON.stringify(user));
              console.log(localStorage.getItem('user'))
              return true;
          }

          return false;
      }));
  
}

  isLogin(){
   
    console.log(localStorage.getItem('user')); 
    let user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    console.log(!(user === null));
    return !(user === null );
  }

  logout(){
    sessionStorage.removeItem('user');
  }

  users(){
    return  this.http.get<any>('http://localhost:4000/users');
  }

}
