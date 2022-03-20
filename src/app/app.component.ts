import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap !: FaceSnap;
  secondSnap !: FaceSnap;
  thirdSnap !: FaceSnap

  ngOnInit(){
    this.mySnap = new FaceSnap(
    'Lena Söderberg',
    'La fille qu on voit partout en informatique ',
    'https://tinyurl.com/34eat443',
    new Date(),
    4
    );

    this.secondSnap = new FaceSnap(
      'Clara Morgane',
      'Une autre belle femme',
      'https://tinyurl.com/2p2yf5nm',
      new Date(),
      500
      );

      this.thirdSnap = new FaceSnap(
        'Kate Mara',
        'l actrice de House of cards',
        'https://tinyurl.com/nvnyjdzx',
        new Date(),
        37
      );



  }
}
