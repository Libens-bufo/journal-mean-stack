import { Component, OnInit } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { JournalComponent } from '../journal/journal.component';

@Component({
  selector: 'app-wrapper',
  templateUrl: './wrapper.component.html',
  styleUrls: ['./wrapper.component.css'],
  
})
export class WrapperComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
