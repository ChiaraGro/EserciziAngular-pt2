import { IUser } from './../../../../models/user';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input() person!: IUser;
  @Output() closedDetail = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
  }

  closeDetail() {
    this.closedDetail.emit();
  }

}
