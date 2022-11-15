import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { Entry } from '../../Entry'
import { UiService } from 'src/app/services/ui.service';

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  text!: string;
  day!: string;
  numDrinks!:number;
  mood!:number;
  completed: boolean = false;
  showCreateEntry!: boolean;
  subscription!: Subscription;
  drinkRating!: number;
  moodRating!: number;

  @Output() emitNewEntry: EventEmitter<Entry> = new EventEmitter();

  constructor(private uiService: UiService) {
    this.subscription = this.uiService.onToggleShowCreateEntry()
    .subscribe(boolVal => this.showCreateEntry = boolVal)
   }
  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscription.unsubscribe(); //for memory leaks
}
  takeDrinkRating($event: number){
    this.drinkRating = $event;
    console.log(this.drinkRating)
  }
  takeMoodRating($event: number){
    this.moodRating = $event;
    console.log(this.moodRating)
  }
  onSubmit(){
    if (!this.text) alert('Entry cannot be empty')

    const entry = {
      text: this.text,
      day: this.day,
      completed: this.completed
    }
    this.emitNewEntry.emit(entry)
    this.text = '';
    this.day = ''
    this.completed = false;
  }
}
