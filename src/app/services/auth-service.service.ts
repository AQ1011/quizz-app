import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { map } from 'rxjs/operators';
import { BehaviorSubject, Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const AUTH_API = 'http://localhost:8080';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) {
  }
    
  public get currentUserValue(): any {
    return localStorage.getItem('currentUser');
  }

  login(credentials: any): Observable<any> {
    return this.http.post(AUTH_API + 'login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(user: any): Observable<any> {
    return this.http.post(AUTH_API + 'register', {
      username: user.username,
      email: user.email,
      password: user.password
    }, httpOptions);
  }
}
