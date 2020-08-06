import { AuthModule } from './authentication/auth.module';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
import { RecipesModule } from './recipes/recipe.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';
import { SocialLoginModule, SocialAuthServiceConfig } from 'angularx-social-login';
import { GoogleLoginProvider, FacebookLoginProvider } from 'angularx-social-login';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoadingSpinnerComponent } from './authentication/loading-spinner/loading-spinner.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,  
    HomepageComponent,
    HeaderComponent,
    FooterComponent,
    LoadingSpinnerComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    SocialLoginModule,
    CommonModule,
    ValidateEqualModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    AuthModule,
    RecipesModule,
    ShoppingListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
