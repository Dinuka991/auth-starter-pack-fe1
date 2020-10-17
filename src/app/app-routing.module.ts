import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './project/home/home.component';
import { AuthComponent } from './project/auth/auth.component';
import { AuthGaurdService } from './project/auth/auth-gaurd.service';


const routes: Routes = [
  { path: '' , component: HomeComponent ,  canActivate: [AuthGaurdService]},
  { path: 'login' , component: AuthComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
