import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, throwIfEmpty } from 'rxjs/operators';
import { throwError } from 'rxjs'
import { stringify } from 'querystring';

export interface AuthResponseData {
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  API_KEY = 'AIzaSyA6suWSwqXNUddamKypAHabWc7kRw5M1Wk'
  constructor(private http: HttpClient) { }

  signup(email: string, password: string) {
    return this.http.post<AuthResponseData>(
      'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key='+this.API_KEY,
      {
        email: email,
        password: password,
        returnSecureToken: true
      }).pipe(catchError(errorRes => {
        let errorMessage = 'An unknown error occurred!'
        if (!errorRes.error || !errorRes.error.error) {
          return throwError(errorMessage)
        }

        switch (errorRes.error.error.message) {
          case 'EMAIL_EXISTS':
            errorMessage='This email exists already'
        }
        return throwError(errorMessage)
      }))
  }

  login(email: string, password: string) {
    return this.http.post<AuthResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key='+this.API_KEY,
    {
      email: email,
      password: password,
      returnSecureToken: true
    })
  }
}
