import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-drink',
  templateUrl: './drink.component.html',
  styleUrls: ['./drink.component.css']
})
export class DrinkComponent implements OnInit {

  className: string = 'rating-empty'; //css class for not being selected

  @Input() drinkId!: number;
  @Input() rating!: number;

  @Output() leave: EventEmitter<number> = new EventEmitter()
  @Output() enter: EventEmitter<number> = new EventEmitter()
  @Output() click: EventEmitter<number> = new EventEmitter()

  constructor() { }

  ngOnInit(): void {
    console.log(this.drinkId, this.rating)
    if (this.rating >= this.drinkId) this.className = 'rating-selected'; //change class if rating is greater than current star
  }

  onEnter(){this.enter.emit(this.drinkId)}
  onLeave(){this.leave.emit(this.drinkId)}
  clickDrink(){this.click.emit(this.drinkId)}

}
