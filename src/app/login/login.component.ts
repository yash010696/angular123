import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { routerTransition } from '../router.animations';
import { AuthenticationService } from '../shared/services';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss'],
    animations: [routerTransition()]
})
export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    loading = false;

    constructor(
        public router: Router,
        private authenticationService: AuthenticationService,
        private fb: FormBuilder
    ) { }

    ngOnInit() {
        this.loginForm = this.fb.group({
            username: new FormControl('', Validators.required),
            password: new FormControl('', Validators.required)
        })
    }

    onLoggedin() {
        console.log(this.loginForm.value);
        this.loading = true;
        this.authenticationService.login(this.loginForm.value.username, this.loginForm.value.password).subscribe((result: any) => {
            this.router.navigate(['/dashboard']);
        }, error => {
            console.log(error);
            this.loading = false;
            this.loginForm.reset();           
            this.router.navigate(['']);
        })
    }

    forgot() {
        alert('okkkkkkkkkk')
    }
}
