import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AngularFireModule } from 'angularfire2';

// Must export the config
export const firebaseConfig = {
  apiKey: 'AIzaSyAtUAz-Hh5-LsC1Pi8g9YQm_zBftKW0mXs',
  authDomain: 'businesscontacts-dbc14.firebaseapp.com',
  databaseURL: 'https://businesscontacts-dbc14.firebaseio.com',
  storageBucket: 'businesscontacts-dbc14.appspot.com',
  messagingSenderId: '769847813736'
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
