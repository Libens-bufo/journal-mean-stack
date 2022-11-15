import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-drinks',
  templateUrl: './drinks.component.html',
  styleUrls: ['./drinks.component.css']
})
export class DrinksComponent implements OnInit {
  @Output() outRating: EventEmitter<number> = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }
  drinks = [1,2,3,4,5,6,7,8,9,10]
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
    this.emitRating()
  }
  emitRating(){this.outRating.emit(this.rating)}
}
