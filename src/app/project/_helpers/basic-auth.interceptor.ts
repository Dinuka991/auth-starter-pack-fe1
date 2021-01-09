import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthService } from '../auth.service';




@Injectable()
export class BasicAuthInterceptor implements HttpInterceptor {
    constructor(private authenticationService: AuthService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      
        
        let currentUser =  JSON.parse(localStorage.getItem('user'))
       console.log(currentUser);
          if(currentUser && currentUser.token){
              console.log('loggggggggggggggg')
            request = request.clone({
                setHeaders: { 
                  Authorization: `Bearer ${currentUser.token}`
                }
            });
        }

        return next.handle(request);
    }
}



