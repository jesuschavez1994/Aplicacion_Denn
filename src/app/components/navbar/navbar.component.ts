import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private wowSubscription: NgwWowService) { }

  ngOnInit() {
    this.wowSubscription.init();
  }

  reset(){
    this.wowSubscription.init();
  }
  
  title: string = "Rubikwebs";
}
