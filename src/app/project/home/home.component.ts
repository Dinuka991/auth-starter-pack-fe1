import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor( private authService: AuthService ,  private router: Router) { }
  title = 'auth-starter-pack1';

  greeting = {id: 'XXX',
              content: 'Hello World'
            };

  ngOnInit() {
    
    this.authService.users().subscribe(
      (data: any) => {
      
        this.greeting.id = data[0].id;
        this.greeting.content = data[0].username;
      }
    )
   
  }
  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['/login']);


  }
}
