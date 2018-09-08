import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../router.animations';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { SignupService } from './signup.service';
import { Router } from '@angular/router';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.scss'],
    animations: [routerTransition()]
})
export class SignupComponent implements OnInit {

    profileform: FormGroup;

    constructor(
        private fb: FormBuilder,
        private signupService:SignupService,
        private router:Router
    ) { }

    ngOnInit() {
        this.profileform = this.fb.group({
            username: new FormControl('', Validators.required),
            age: new FormControl(),
            email: new FormControl('', [Validators.required, Validators.pattern("[^ @]*@[^ @]*")]),
            password: new FormControl('', Validators.required),
        })

    }

    onSubmit(data) {
        console.log(this.profileform.value);
        this.signupService.addStudent(data).subscribe((result:any)=>{
            console.log(result);
            this.router.navigate(['']);
            
        }, error =>{
            console.log(error);
        })
}

    }