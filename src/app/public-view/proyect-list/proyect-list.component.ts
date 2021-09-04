import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyect-list',
  templateUrl: './proyect-list.component.html',
  styleUrls: ['./proyect-list.component.css']
})
export class ProyectListComponent implements OnInit {
  login: string;
  images = [0, 1, 2].map((n) => `assets/images/${n}.jpg`);
  logos = [0].map((n) => `assets/images/projects/${n}.svg`);

  constructor(public router: Router) { }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

}
