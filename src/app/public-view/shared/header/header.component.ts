import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
  constructor(private wowSubscription: NgwWowService) { }

  ngOnInit() {
    this.wowSubscription.init();
  }

  reset(){
    this.wowSubscription.init();
  }
  
  title: string = "Rubikwebs";

}
