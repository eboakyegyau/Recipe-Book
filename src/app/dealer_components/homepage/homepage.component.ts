import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {

  images = ['assets/images/2a338988f1af4e1d98d94af873bc711b.jpg',
  'assets/images/download.jpeg',
  'assets/images/VauxhallCorsa@1.5x.png',
  'assets/images/2a338988f1af4e1d98d94af873bc711b.jpg',
  'assets/images/download.jpeg',
  'assets/images/VauxhallCorsa@1.5x.png',
  'assets/images/2a338988f1af4e1d98d94af873bc711b.jpg',
  'assets/images/download.jpeg',
  'assets/images/VauxhallCorsa@1.5x.png',
  'assets/images/2a338988f1af4e1d98d94af873bc711b.jpg',
  'assets/images/download.jpeg',
  'assets/images/VauxhallCorsa@1.5x.png'
]

  constructor() { }

  ngOnInit(): void {
  }

}
