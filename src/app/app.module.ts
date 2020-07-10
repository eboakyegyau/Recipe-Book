import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ValidateEqualModule } from 'ng-validate-equal';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/login/login.component';
import { SignupComponent } from './authentication/signup/signup.component';
import { HomepageComponent } from './dealer_components/homepage/homepage.component';
import { DealerCarListsComponent } from './dealer_components/dealer-car-lists/dealer-car-lists.component';
import { DealerCarListComponent } from './dealer_components/dealer-car-list/dealer-car-list.component';
import { CarListComponent } from './buyer_components/car-list/car-list.component';
import { CarListsComponent } from './buyer_components/car-lists/car-lists.component';
import { HeaderComponent } from './header/header/header.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common'
import { ResetComponent } from './authentication/reset/reset.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HomepageComponent,
    DealerCarListsComponent,
    DealerCarListComponent,
    CarListComponent,
    CarListsComponent,
    HeaderComponent,
    FooterComponent,
    ResetComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    ValidateEqualModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
