import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { environment } from '../../../environments/environment';

import { User } from '../model';

@Injectable()
export class UserService {

  constructor(private http: HttpClient) { }

  signup(user: User) {
    return this.http.post<any>(`${environment.serviceUrl}user/signup`, {
      fname: user.fname,
      mname: user.mname,
      lname: user.lname,
      password: user.password,
      email: user.email
    }).map((response)=> {
      return {};
    });
  }

}
