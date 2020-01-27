import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

import { User } from '../model';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<User>;
  public currentUser: Observable<User>;

  constructor(private http: HttpClient) {
    this.currentUserSubject = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('userProfile')));
    this.currentUser = this.currentUserSubject.asObservable();
   }

   public get currentUserValue(): User {
     return this.currentUserSubject.value;
   }

   login(email: string, password: string) {
     return this.http.post<any>(`${environment.serviceUrl}user/signin`, { email: email, password: password})
          .map((user: User) => {
            if(user && user.token) {
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.currentUserSubject.next(user);
            }
            return user;
          });
   }

   logout() {
     localStorage.removeItem('userProfile');
     this.currentUserSubject.next(null);
   }

}
