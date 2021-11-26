import { IUser } from './../../../../models/user';
import { PERSONS } from './../../../../models/mock-data';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  @Output() selectedElement = new EventEmitter<IUser>();

  persons = PERSONS;

  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(person: IUser){
    const index = this.persons.indexOf(person);
    this.persons.splice(index, 1)
  }


}
