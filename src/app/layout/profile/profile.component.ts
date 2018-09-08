import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public user : any;
  public name = "";
  public email = "";
  public age ="";
  public updatebtn = true;
  constructor() { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem("currentUser"));
    this.user =this.user.user
    console.log(this.user);
    
  }

  edit(){
    this.updatebtn = false;
    this.name = this.user.sname;
    this.email = this.user.email;
    this.age = this.user.age;
  }

  update(){
    console.log(this.name ,'/////',this.email ,'///////',this.age);
  }
}
