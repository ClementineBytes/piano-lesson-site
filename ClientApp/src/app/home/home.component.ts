import { Component } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
})
export class HomeComponent {

  cards: Card[];

  constructor() {
    this.cards = [
      {
        title: 'Personalized Lessons',
        content: 'Whether you are a complete beginner or looking to refine your skills, there are learning opportunities available for everyone.',
        imagePath: '../assets/piano-icon-cropped.png'
      },
      {
        title: 'No Keyboard? No Problem',
        content: 'Equipment rentals are available for New Mexico residents.',
        imagePath: '../assets/info.png'
      },
      {
        title: '"Ryan is an amazing teacher. He keeps my kids engaged and excited about learning music."',
        content: '- John Smith',
        imagePath: '../assets/user.png'
      }
    ]
  }



}


export interface Card {
  title: string;
  content: string;
  imagePath: string;
}