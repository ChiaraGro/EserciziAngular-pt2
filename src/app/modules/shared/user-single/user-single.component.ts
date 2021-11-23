import { IUser } from './../../../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-single',
  templateUrl: './user-single.component.html',
  styleUrls: ['./user-single.component.css']
})
export class UserSingleComponent implements OnInit {
  @Input() person! : IUser;
  @Output() deleteUser = new EventEmitter();

  deletedUser(person: IUser){
    this.deleteUser.emit(person)
  }


  constructor() { }

  ngOnInit(): void {
  }

}
