import { IUser } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  person?: IUser;

  constructor() {}

  ngOnInit(): void {}

  selectUser(person: IUser) {
    this.person = person;
  }

  closeDetail(){
    this.person = undefined; //se è undefined, con ngif non lo faccio più visualizzare
  }

}
