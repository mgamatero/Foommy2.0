import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';


import { AuthService } from '../services/auth.service';


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


  ) {
    // redirect to home if already logged in
    // if (this.auth.isLogged) {
    //   this.router.navigate(['/']);
    // }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
       username: ['', Validators.required],
      password: ['', Validators.required],
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
        console.log({data});
        this.router.navigate(['/'])
      },
      err=>{
                window.alert(err.message)
                this.loginForm.reset();
      });
        }
}
