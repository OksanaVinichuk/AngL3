import { Component, OnInit } from '@angular/core';
import {User} from '../../models/User';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
 users: User[];
   constructor(private activatedRoute: ActivatedRoute){
     this.activatedRoute.params.subscribe(value => console.log(value));
   }

  ngOnInit(): void {
  }

}
