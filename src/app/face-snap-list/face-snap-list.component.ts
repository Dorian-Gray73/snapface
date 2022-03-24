import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.models';

@Component({
  selector: 'app-face-snap-list',
  templateUrl: './face-snap-list.component.html',
  styleUrls: ['./face-snap-list.component.scss']
})
export class FaceSnapListComponent implements OnInit {

  faceSnaps !: FaceSnap[];



  constructor() { }

  ngOnInit(): void {
    this.faceSnaps = [
      {
    title:'Port de Busan',
    description:'Port cotier de Corée du  sud',
    imageUrl:'https://tinyurl.com/2p8s8w43',
    createdDate: new Date(),
    snaps : 4
     },
     {
      title:'Kyoto',
      description:'Ancienne ville impériale japonaise',
      imageUrl:'https://tinyurl.com/z8kw3w6a',
      createdDate:new Date(),
      snaps:500
    },
    {
        title:'Verone',
        description:'La ville de Romeo et Juliette',
        imageUrl:'https://tinyurl.com/3n2nxxvm',
        createdDate:new Date(),
        snaps:37,
        location:'Vérone,Italie'
      }
    ];
  }

}
