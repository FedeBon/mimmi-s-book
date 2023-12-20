import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MaterialModule } from "./material/material.module";
import { StarRatingModule } from 'angular-star-rating';
import { StarRatingComponent } from './components/star-rating/star-rating.component';
import { ManagerComponent } from './components/manager/manager.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DialogInsertBookComponent } from './components/dialog-insert-book/dialog-insert-book.component';
import { SendEmailComponent } from './components/send-email/send-email.component';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { LoginComponent } from './components/login/login.component';
import { ManagerNavbarComponent } from './components/manager-navbar/manager-navbar.component';
import { WarningPopupComponent } from './components/warning-popup/warning-popup.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StarRatingComponent,
    ManagerComponent,
    DialogInsertBookComponent,
    SendEmailComponent,
    SpinnerComponent,
    LoginComponent,
    ManagerNavbarComponent,
    WarningPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    StarRatingModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
