import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../appSettings/app.settings';

@Injectable({
  providedIn: 'root'
})
export class SignupService {

  constructor(
    private http:HttpClient,
  ) { }

  addStudent(data){

    console.log(AppSettings.BASE_URL);

    return this.http.post(AppSettings.BASE_URL , data) 

  }

}
