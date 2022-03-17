import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-face-snap',
  templateUrl: './face-snap.component.html',
  styleUrls: ['./face-snap.component.scss']
})
export class FaceSnapComponent implements OnInit {
  title!: string;
  description! : string;
  createdDate!: Date;
  snaps!: number;
  imageUrl !: string;
  btnTxt !: string;

  ngOnInit(): void {
      this.title = 'Lena Söderberg';
      this.description = 'La fille qu on voit partout en informatique ';
      this.createdDate = new Date();
      this.snaps = 6;
      this.imageUrl = 'https://tinyurl.com/34eat443';
      this.btnTxt = 'Oh SNAP';
  }

  onAddSnap(){
    if (this.btnTxt == 'Oh SNAP' ) {
      this.snaps++;
      this.btnTxt = 'snapped ';
    } else {
      this.snaps--;
      this.btnTxt = 'Oh SNAP';
    }
  }


}
