import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-caroussel',
  templateUrl: './caroussel.component.html',
  styleUrls: ['./caroussel.component.css']
})
export class CarousselComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  images = ['assets/img/4.jpg','assets/img/5.png','assets/img/6.png'];
}
