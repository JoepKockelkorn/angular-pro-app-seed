import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';

import { Store } from 'store';

// feature modules

// containers
import { AppComponent } from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES)
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}

/*

var config = {
    apiKey: "AIzaSyB2tnvS4ETxi9uHSOenrRJZnvhtYewNNUg",
    authDomain: "fitness-app-743e5.firebaseapp.com",
    databaseURL: "https://fitness-app-743e5.firebaseio.com",
    projectId: "fitness-app-743e5",
    storageBucket: "fitness-app-743e5.appspot.com",
    messagingSenderId: "87417243476"
};

*/
