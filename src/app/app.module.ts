import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { UsersComponent } from './components/users/users.component';
import {Route, RouterModule, Routes} from '@angular/router';
import {UserResolveService} from './services/resolve/user-resolve.service';
import { UserComponent } from './components/user/user.component';

const routes: Routes = [{
  path: '' , component: UsersComponent, resolve: {usersData: UserResolveService}
}];

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    UserComponent,
    ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    RouterModule.forRoot([
      {path: 'link/users', component: UsersComponent}
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
