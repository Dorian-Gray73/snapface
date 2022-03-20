import { Component, OnInit } from '@angular/core';
import { FaceSnap } from './Models/face-snap.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  mySnap !: FaceSnap;


  ngOnInit(){
    this.mySnap = new FaceSnap(
    'Lena Söderberg',
    'La fille qu on voit partout en informatique ',
    'https://tinyurl.com/34eat443',
    new Date(),
    4
    );
  }
}
