import { Component, OnInit, Input } from '@angular/core';
import { Entry } from 'src/app/Entry';

import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-journal-entry',
  templateUrl: './journal-entry.component.html',
  styleUrls: ['./journal-entry.component.css']
})
export class JournalEntryComponent implements OnInit {
  @Input() entry!: Entry;

  xIcon = faTimesCircle;

  constructor() { }

  ngOnInit(): void {
  }

}
