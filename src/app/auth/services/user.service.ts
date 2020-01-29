import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { SignupDetails } from '../model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  signup(signupDetails: SignupDetails) {
    return this.http.post<any>(`${environment.serviceUrl}user/signup`, {
      fname: signupDetails.fname,
      mname: signupDetails.mname,
      lname: signupDetails.lname,
      password: signupDetails.password,
      email: signupDetails.email
    }).map((response)=> {
      return {};
    });
  }

}
