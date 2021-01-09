import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthComponent } from './auth.component';
import { FormsModule } from '@angular/forms';
import { AuthService } from '../auth.service';
import { AuthGaurdService } from './auth-gaurd.service';
import { HomeComponent } from '../home/home.component';
import { BasicAuthInterceptor } from '../_helpers/basic-auth.interceptor';



@NgModule({
  declarations: [AuthComponent , HomeComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [AuthGaurdService , AuthService , { provide:  HTTP_INTERCEPTORS , useClass: BasicAuthInterceptor , multi: true}]  
})
export class AuthModule { }
