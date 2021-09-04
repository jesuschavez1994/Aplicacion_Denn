import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-service-list',
  templateUrl: './service-list.component.html',
  styleUrls: ['./service-list.component.css']
})
export class ServiceListComponent implements OnInit {
  login: string;
  constructor(public router: Router) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

}
