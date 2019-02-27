import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MessagesComponent } from './messages.component'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule,
   MatCheckboxModule,
   MatCardModule,
   MatInputModule,
   MatSnackBarModule,
   MatToolbarModule
  
  } from '@angular/material';

  import {WebService} from './Web.Services';
  import {HttpModule} from '@angular/http';
  import{NewMessagesComponent}from './new-message.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
     MessagesComponent,
     NewMessagesComponent
  ],

  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatInputModule,
    MatSnackBarModule,
    MatToolbarModule,
    HttpModule,
    FormsModule
  ],

  providers: [
     WebService
     
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
