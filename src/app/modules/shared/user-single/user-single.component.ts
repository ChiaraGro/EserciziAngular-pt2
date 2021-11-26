import { IUser } from './../../../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() person! : IUser;
  @Output() deletedUser = new EventEmitter();
  @Output() selectedElement  = new  EventEmitter<IUser>();


  constructor() { }

  ngOnInit(): void {
  }

  deleteUser(person: IUser){
    this.deletedUser.emit(person)
  }

  selectUser(value: IUser) {
    this.selectedElement.emit(value);
  }

}
