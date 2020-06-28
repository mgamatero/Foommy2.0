
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { FoommyService } from '../services/foommy.service';
import { UserObjService } from '../services/user-obj.service';




@Component({
  selector: 'app-page-register',
  templateUrl: './page-register.component.html',
  styleUrls: ['./page-register.component.css']
})
export class PageRegisterComponent implements OnInit {
    registerForm: FormGroup;
    loading = false;
    submitted = false;

    constructor(
        private formBuilder: FormBuilder,
        private router: Router,
        private auth:AuthService,
        private foomyService:FoommyService,
        private userObjService:UserObjService,
    )
    {}

    ngOnInit() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', Validators.required],
            lastName: ['', Validators.required],
            username: ['', Validators.required],
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    // convenience getter for easy access to form fields
    get f() { return this.registerForm.controls; }

    onSubmit() {
        // this.submitted = true;

        // stop here if form is invalid
        if (this.registerForm.invalid) {
            return;
        }
              this.auth.emailSignUp(this.f.username.value, this.f.password.value)
        .then((data) => {
                  this.userObjService.createUserObject(this.auth.currentUserInfo.uid)
                  // console.log('CurrentUserInfo - '+this.auth.currentUserInfo.uid)
                  this.router.navigate(['/'])
        },
        err=>{
                  window.alert(err.message)
                  this.registerForm.reset();
        });
    }
}

