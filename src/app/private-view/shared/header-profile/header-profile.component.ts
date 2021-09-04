import { Component, OnInit } from '@angular/core';
import { UserRegisterService } from '../../../services/userRegister/user-register.service';


@Component({
  selector: 'app-header-profile',
  templateUrl: './header-profile.component.html',
  styleUrls: ['./header-profile.component.css']
})
export class HeaderProfileComponent implements OnInit {

  user: string;
  admin: string;

  // tslint:disable-next-line: variable-name
  constructor(public _userRegisterService: UserRegisterService) { }

  ngOnInit(): void {
    this.user = localStorage.getItem('user');
    this.admin = localStorage.getItem('admin');
  }

}
