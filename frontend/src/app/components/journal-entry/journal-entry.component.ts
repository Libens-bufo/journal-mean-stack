import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Entry } from 'src/app/Entry';

import { faTimesCircle, faTrash, faTrashAlt, faTrashCan, faTrashCanArrowUp } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {
  @Input() entry!: Entry;
  @Output() onDeleteEntry: EventEmitter<Entry> = new EventEmitter();
  @Output() onToggleCompleted: EventEmitter<Entry> = new EventEmitter();

  xIcon = faTrash;
  date?: string = ''
  constructor() { }

  ngOnInit(): void {
    this.date = new Date(this.entry.date).toDateString()
  }
  onDelete(entry: Entry){
    this.onDeleteEntry.emit(entry)
  }
  onDoubleClick(entry: Entry){
    this.onToggleCompleted.emit(entry)
  }
}
