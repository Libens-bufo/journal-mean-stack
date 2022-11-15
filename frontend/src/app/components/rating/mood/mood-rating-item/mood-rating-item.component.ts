import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-mood-rating-item',
  templateUrl: './mood-rating-item.component.html',
  styleUrls: ['./mood-rating-item.component.css']
})
export class MoodRatingItemComponent implements OnInit {
  className: string = 'rating-empty'; //css class for not being selected

  @Input() faceId!: number;
  @Input() rating!: number;

  @Output() leave: EventEmitter<number> = new EventEmitter()
  @Output() enter: EventEmitter<number> = new EventEmitter()
  @Output() click: EventEmitter<number> = new EventEmitter()

  constructor() { }
  ngOnInit(): void {
    console.log(this.faceId, this.rating)
    if (this.rating >= this.faceId) this.className = 'rating-selected'; //change class if rating is greater than current star
  }

  onEnter(){this.enter.emit(this.faceId)}
  onLeave(){this.leave.emit(this.faceId)}
  clickFace(){this.click.emit(this.faceId)}

}
