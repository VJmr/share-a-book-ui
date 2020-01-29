import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs/operators';

import { UserService } from '../services/user.service';
import { AuthenticationService } from '../services/authentication.service';
import { SignupDetails } from '../model';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.sass']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;
  submitted = false;
  error = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private userService: UserService,
    private authenticationService: AuthenticationService
  ) { }

  ngOnInit() {
    this.signupForm = this.formBuilder.group({
      fname: ['', Validators.required],
      mname: ['', Validators.required],
      lname: ['', Validators.required],
      password: ['', Validators.required],
      email: ['', Validators.required]
    });
    this.authenticationService.logout();
  }

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.signupForm.invalid) {
        return;
    }

    this.loading = true;
    const signupDetails: SignupDetails = {
      fname: this.f.fname.value,
      mname: this.f.mname.value,
      lname: this.f.lname.value,
      password: this.f.password.value,
      email: this.f.email.value,
    };
    this.userService.signup(signupDetails)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate(['/auth/login']);
            },
            error => {
                this.error = error;
                this.loading = false;
            });
  }

}
