import { Component, OnInit } from '@angular/core';
import {Entry} from '../../Entry'
import {ENTRYS} from '../../test-entry-set'


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journal: Entry[] = ENTRYS;

  constructor() { }

  ngOnInit(): void {
  }

}
