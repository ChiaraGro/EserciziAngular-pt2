import { IUser } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css'],
})
export class UserContainerComponent implements OnInit {
  person!: IUser;

  selectedUser?: IUser;

  constructor() {}

  ngOnInit(): void {}

  selectUser(person: IUser) {
    this.selectedUser = person;
  }

  closeDetail(){
    this.selectedUser = undefined; //se è undefined, con ngif non lo faccio più visualizzare
  }

}
