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
    title:'Lena Söderberg',
    description:'La fille qu on voit partout en informatique ',
    imageUrl:'https://tinyurl.com/34eat443',
    createdDate: new Date(),
    snaps : 4
     },
     {
      title:'Clara Morgane',
      description:'Une autre belle femme',
      imageUrl:'https://tinyurl.com/2p2yf5nm',
      createdDate:new Date(),
      snaps:500
    },
    {
        title:'Kate Mara',
        description:'l actrice de House of cards',
        imageUrl:'https://tinyurl.com/nvnyjdzx',
        createdDate:new Date(),
        snaps:37,
        location:'House of cards'
      }
    ];
  }

}
