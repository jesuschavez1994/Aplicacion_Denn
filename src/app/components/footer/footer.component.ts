import { Component, OnInit } from '@angular/core';
import {InfocardsService, Infofooter} from '../../services/infocard.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  footer: Infofooter[] = [];

  constructor(private infoCards: InfocardsService) {
    this.footer = this.infoCards.getContentFooter();
    console.log(this.footer);
   }

  ngOnInit(): void {
  }

  redirecToInstagram(){
    window.open('https://www.instagram.com/rubikweb_/?hl=en');
  }

  titleFooter: string = "Rubikweb";
  textFooter: string ="Innovando para tí.";
  textContact: string = "Contacto"

}
