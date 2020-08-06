import { ResetComponent } from './reset/reset.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoogleLoginProvider, FacebookLoginProvider, SocialAuthServiceConfig } from 'angularx-social-login';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    LoginComponent,
    ResetComponent,
    SignupComponent
  ],
  exports: [
    LoginComponent,
    ResetComponent,
    SignupComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
  ],
  providers: [{
    provide: 'SocialAuthServiceConfig',
    useValue: {
      autoLogin: false,
      providers: [
        {
          id: GoogleLoginProvider.PROVIDER_ID,
          provider: new GoogleLoginProvider(
            '766283595557-qqeda7ftok36u8fio777ue83ba30fe3v.apps.googleusercontent.com'
          ),
        },
        {
          id: FacebookLoginProvider.PROVIDER_ID,
          provider: new FacebookLoginProvider(
            '333670734459545'),
        },
      ],
    } as SocialAuthServiceConfig,
  }],
})
export class AuthModule { }
