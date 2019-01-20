import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthenticationService } from '../../_services';

@Component(
  {
    selector: 'login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
  }
)
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    loading = false;
    submitted = false;
    returnUrl: string;
    error = '';

    constructor(
        private formBuilder: FormBuilder,
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService
    ) { }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required, Validators.email]],
            password: ['', Validators.required],
            type: ['', Validators.required],
        });

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }


    get f() { return this.loginForm.controls; }

    onSubmit() {
        this.submitted = true;
        if (this.loginForm.invalid) {
            return;
        }

        this.loading = true;

        let params = {
          "email" : this.f.email.value,
          "password": this.f.password.value,
          "type" : this.f.type.value
        }

        this.authenticationService.login(params)
            .subscribe(
                data => {
                  this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.error = error;
                    this.loading = false;
                });
    }
}
