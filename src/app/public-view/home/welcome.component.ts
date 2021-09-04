import { Component, OnInit } from '@angular/core';
import { NgwWowService } from 'ngx-wow';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  login: string;

  constructor(public router: Router,private wowSubscription: NgwWowService) { }


  ngOnInit() {
    this.login = localStorage.getItem('login');
  }

  reset(){
    this.wowSubscription.init();
  }

  title: string = "Comunicación Digital";
  texto: string = "Es el intercambio de información y conocimiento haciendo uso de las herramientas digitales disponibles, puestas a nuestra disposición por la investigación y desarrollo tecnológico. La comunicación digital ahora ocurre en un contexto multinivel y multicanal. Esto se refiere a la factibilidad de comunicarse por diferentes vías al mismo tiempo y enviar diversos significados en un mismo mensaje.";
  button: string = "Platícanos aquí";
  img: any = "assets/images/Comunicacion-Digital.png";
  flecha: any = "assets/images/sociales/logo flecha pagina de inicio.svg";


}
