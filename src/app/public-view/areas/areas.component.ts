import { Component, OnInit } from '@angular/core';
import {InfocardsService, Card} from '../../services/infocard.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.css']
})
export class AreasComponent implements OnInit {

   card: any[] = [];
   equipo: any[] = [];

  constructor(private infoCards: InfocardsService ) { }



  ngOnInit(){
    this.card = this.infoCards.getCard();
    this.equipo = this.infoCards.getEquipo();
    console.log(this.card, this.equipo);
    
  }

  title: string = "TIPOS DE MODULACIÓN";
  imgLeft: any = "/assets/images/welcome/logo de parte del rubik.svg";

}
