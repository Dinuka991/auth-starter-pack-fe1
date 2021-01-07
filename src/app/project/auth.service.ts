import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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
    this.http.post('localhost:4000/users/authenticate', obj).subscribe(
      (data: any) => {
        console.log('sss');
        if(data.token){
          sessionStorage.setItem('user', JSON.stringify(data) )
          return true;
        }else{
          return false;
        }
      }
     
    )
    console.log('sss');
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
