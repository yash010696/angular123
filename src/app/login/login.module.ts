import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptor,  } from '../shared/_helpers';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
    imports: [CommonModule, LoginRoutingModule , ReactiveFormsModule ,FormsModule],
    declarations: [LoginComponent],
    providers:[
        {provide:HTTP_INTERCEPTORS,useClass:JwtInterceptor,multi:true},
        // {provide:HTTP_INTERCEPTORS,useClass:ErrorInterceptor,multi:true},
    ]
})
export class LoginModule {}
