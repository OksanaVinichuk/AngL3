import { Injectable } from '@angular/core';
import {UserService} from '../user/user.service';
import {Observable} from 'rxjs';
import {User} from '../../models/User';
import {Resolve} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserResolveService implements Resolve<User[]>{

  constructor( private userService: UserService) {
  }

  resolve(): Observable<User[]>{
    return this.userService.getUsers()
  }

}
