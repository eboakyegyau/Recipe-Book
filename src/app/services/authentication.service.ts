import { User } from './../authentication/user.model';
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http'
import { Subject, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

interface AuthResponseData {

  kind: string,
  idToken: string,	
  email: string,	
  refreshToken: string,	
  expiresIn: string,	
  localId: string,
  registered:	boolean

}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  user = new Subject<User>();
  
  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
      {
          email: email,
          password: password,
          returnSecureToken: true,
      } 
    )
    .pipe(catchError(this.handleError), tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }));
  }

  logIn(email: string, password: string){
    return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
      {
         email: email,
         password: password,
         returnSecureToken: true
      } 
    )
    .pipe(catchError(this.handleError),tap(resData => {
      this.handleAuthentication(resData.email, resData.localId, resData.idToken, +resData.expiresIn)
    }));
 }

 reset(email: string){
  return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
    {
       email: email,
       requestType: "PASSWORD_RESET"
    } 
  );
}

private handleAuthentication(
  email: string,
  userId: string,
  token: string,
  expiresIn: number
) {
  const expirationDate = new Date(new Date().getTime() + expiresIn * 1000)
  const user = new User(
    email, 
    userId, 
    token, 
    expirationDate
    );
    this.user.next(user);

}

private handleError(errorRes: HttpErrorResponse) {
  let errorMessage = "An unknown error occured!";
  if (!errorRes.error || !errorRes.error.error) {
    return throwError(errorMessage);
  }
  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMessage = 'Try Again';
      break;

    case 'USER_DISABLED':
      errorMessage = 'Try Again';
      break;

    case 'INVALID_PASSWORD':
      errorMessage = 'Try Again';
      break;

    case 'EMAIL_NOT_FOUND':
      errorMessage = 'Try Again';
      break;
  }
  return throwError(errorMessage);

}
}
