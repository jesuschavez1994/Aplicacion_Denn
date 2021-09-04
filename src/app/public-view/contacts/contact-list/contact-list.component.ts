import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  login: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

}
