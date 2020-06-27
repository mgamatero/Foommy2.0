import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';

import { AuthService } from '../services/auth.service';
import { AlertService } from '../services/alert.service';
import { database } from 'firebase';

@Component({
  selector: 'app-page-login',
  templateUrl: './page-login.component.html',
  styleUrls: ['./page-login.component.css'],
})
export class PageLoginComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // returnUrl: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService,
    private alertService: AlertService
  ) {
    // redirect to home if already logged in
    // if (this.auth.isLogged) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: [''],
      password: [''],
      // username: ['', Validators.required],
      // password: ['', Validators.required],
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    // this.loading = true;
    this.auth
      .emailLogin(this.f.username.value, this.f.password.value)
      .then((data) => {
        alert("logged in as " + this.auth.getUser())
        this.router.navigate(['/'])
      },
      err=>{
                alert(err.message)
                this.loginForm.reset();
      });
        }
}
