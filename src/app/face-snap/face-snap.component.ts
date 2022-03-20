import { Component, Input, OnInit } from '@angular/core';
import { FaceSnap } from '../Models/face-snap.models';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {

  @Input() faceSnap !: FaceSnap;

  btnTxt !: string;

  ngOnInit(): void {
      this.btnTxt = 'Oh SNAP';
  }

  onAddSnap(){
    if (this.btnTxt == 'Oh SNAP' ) {
      this.faceSnap.snaps++;
      this.btnTxt = 'snapped ';
    } else {
      this.faceSnap.snaps--;
      this.btnTxt = 'Oh SNAP';
    }
  }


}
