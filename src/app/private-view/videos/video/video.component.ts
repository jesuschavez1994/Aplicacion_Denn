import {AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import videojs from 'video.js';

declare var require: any;
require('videojs-contrib-quality-levels');
require('videojs-hls-quality-selector');

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit, AfterViewInit, OnDestroy {

  login: string;
  public player: videojs.Player;



  //url = 'assets/videos/Jellyfish - 10480.mp4';
  url = 'https://bitdash-a.akamaihd.net/content/MI201109210084_1/m3u8s/f08e80da-bf1d-4e3d-8899-f0f6155f6efa.m3u8';
  urlPoster = 'assets/images/2.jpg'
  constructor(public router: Router) {
  }

  ngOnInit(): void {
    this.login = localStorage.getItem('login');
  }

  ngAfterViewInit() {
    const options = {
      'sources': [{
        'src': this.url,
        //'type': 'application/x-mpegURL'
      }
      ],
      loop:true,
      preload: "metadata",
      controls: true,
      breakpoints: {
        tiny: 300,
        xsmall: 400,
        small: 500,
        medium: 600,
        large: 700,
        xlarge: 800,
        huge: 900
      },
      fluid:true,
      liveui:true,
      poster : this.urlPoster,
    };
    this.player = videojs('my-video', options, function onPlayerReady() {
      console.log('Player ready');
      var myPlayer = this, id = myPlayer.id();
      myPlayer.hlsQualitySelector();
    });

  }

  ngOnDestroy(): void {
    if (this.player != null) {
      this.player.dispose();
    }
  }
}
