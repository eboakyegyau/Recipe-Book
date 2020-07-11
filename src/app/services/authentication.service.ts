import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

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

  constructor(private http: HttpClient) { }

  signUp(email: string, password: string){
    return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
      {
          email: email,
          password: password,
          returnSecureToken: true,
      } 
    );
  }

  logIn(email: string, password: string){
    return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
      {
         email: email,
         password: password,
         returnSecureToken: true
      } 
    );
 }

 reset(email: string){
  return this.http.post<AuthResponseData>( 'https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyCL35A3O2RZhhJd3Mta_pvN3mymRjbNJnM', 
    {
       email: email,
       requestType: "PASSWORD_RESET"
    } 
  );
}
}
