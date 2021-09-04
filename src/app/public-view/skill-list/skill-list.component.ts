import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {InfocardsService} from '../../services/infocard.service';

@Component({
  selector: 'app-skill-list',
  templateUrl: './skill-list.component.html',
  styleUrls: ['./skill-list.component.css']
})
export class SkillListComponent implements OnInit {
  
  login: string;
  card: any[] = [];
  equipo: any[] = [];

  constructor(public router: Router,private infoCards: InfocardsService) { }

  ngOnInit(){
    this.card = this.infoCards.getCard();
    this.equipo = this.infoCards.getEquipo();
    console.log(this.card, this.equipo);
    this.login = localStorage.getItem('login');
  }

  imgLeft: any = "/assets/images/welcome/logo de parte del rubik.svg";
  imgRight: any = "/assets/images/footer/logo rubik cortados111.svg";

}
