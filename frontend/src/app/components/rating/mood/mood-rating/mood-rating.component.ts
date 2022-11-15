import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mood-rating',
  templateUrl: './mood-rating.component.html',
  styleUrls: ['./mood-rating.component.css']
})
export class MoodRatingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  faces = [1,2,3,4,5,6,7,8,9,10]
  rating: number = 0;
  hover: number = 0;

  enter(num: number){
    this.hover = num;
  }
  leave(){
    this.hover = 0;
  }
  setRating(num:number){
    this.rating = num;
  }
}
