import { Injectable } from '@angular/core';

@Injectable()
export class InfocardsService{

    private infocards: Card[] = [
      {
        title: 'Modulación Análogica AM',
        bio: 'La modulación en amplitud (AM) funciona mediante la variación de la amplitud de la señal transmitida en relación con la información que se envía. Contrastando esta con la modulación de frecuencia, en la que se varía la frecuencia, y la modulación de fase, en la que se varía la fase.',
        img: '../../../assets/images/senal_AM.jpg',
      },
      {
        title: 'Modulación Análogica FM',
        bio: 'La frecuencia modulada (FM) o modulación de frecuencia es una modulación angular que transmite información a través de una onda portadora variando su frecuencia. En aplicaciones analógicas, la frecuencia instantánea de la señal modulada es proporcional al valor instantáneo de la señal moduladora',
        img: '../../../assets/images/senal_FM.jpg',
      },
      {
        title: 'Modulación Análogica PM',
        bio: 'Modulación de fase (PM). Es un proceso donde el parámetro de la señal portadora que variará de acuerdo a señal moduladora es la fase, manteniendo la frecuencia y la amplitud constante, es un tipo de modulación exponencial al igual que la modulación de frecuencia.',
        img: '../../../assets/images/senal_PM.jpg',
      }
    ];

    private infoFooter: Infofooter[] = [
      {
        imagesFooter: '../../../assets/images/footer/logo_rubikweb_blanco.svg',
        footerTextLogo: 'Innovando para ti',
        footerTextRedes: 'Redes sociales',
        correo1: 'info@rubikweb.com',
        correo2: 'rubikweb7@gmail.com',
        celContact: '+58 414 533 7998'
      }
    ];

    private equipo: Equipo[] = [
      {
        titleEquipo: 'DEMODULACIÓN',
        text: 'En telecomunicaciones, este término es el opuesto a modulación. Así, en cualquier telecomunicación normalmente existirá al menos una pareja modulador-demodulador (módem), uno en cada extremo de la comunicación.',
        imgRight: '../../../assets/images/footer/logo rubik cortados11.svg'
      }
    ];

    constructor(){
        console.log('servicio Listo');
     }

     getCard(){
       return this.infocards;
     }

     getContentFooter(){
       return this.infoFooter;
     }

     getEquipo(){
       return this.equipo;
     }

}

export interface Card{
    title: string;
    bio: string;
    img: string;
};

export interface Equipo{
  titleEquipo: string;
  text: string;
  imgRight: string;
};

export interface Infofooter{
  imagesFooter: string;
  footerTextLogo: string;
  footerTextRedes: string;
  correo1: string;
  correo2: string;
  celContact: string;
};
