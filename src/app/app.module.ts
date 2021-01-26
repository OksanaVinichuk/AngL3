import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { UserComponent } from './components/user/user.component';
import {HttpClient, HttpClientJsonpModule, HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
