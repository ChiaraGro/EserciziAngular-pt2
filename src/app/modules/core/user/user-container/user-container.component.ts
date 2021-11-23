import { IUser } from './../../../../models/user';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-container',
  templateUrl: './user-container.component.html',
  styleUrls: ['./user-container.component.css']
})
export class UserContainerComponent implements OnInit {


  selectedUser?: IUser;
// persona cliccata

  hide = true;

  constructor() { }

  ngOnInit(): void {
  }


  selectUser(person: IUser){
    this.selectedUser = person;
  }

  // closeDetail(value: boolean){
  //   this.hide = value;
  // }

  closeDetail(){
    this.selectedUser = undefined;
  }
}
