import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Entry } from '../../Entry'

@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css']
})
export class AddEntryComponent implements OnInit {
  text!: string;
  day!: string;
  completed: boolean = false;

  @Output() emitNewEntry: EventEmitter<Entry> = new EventEmitter();

  constructor() { }
  ngOnInit(): void {
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
