import { Component, OnInit, ɵisDefaultChangeDetectionStrategy } from '@angular/core';
import {Entry} from '../../Entry'

import { EntryService } from 'src/app/services/entry.service';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-journal',
  templateUrl: './journal.component.html',
  styleUrls: ['./journal.component.css']
})
export class JournalComponent implements OnInit {

  journal: Entry[] = [];

  constructor(private entryService: EntryService) { }

  ngOnInit(): void {
    this.entryService.getJournal()
    .subscribe((journal) => this.journal = journal)
    }
  
    deleteEntry(entry: Entry) {
      this.entryService
        .deleteEntry(entry)
        .subscribe( () => this.entryService.getJournal().subscribe((journal) => this.journal = journal)
        );
    }

    toggleCompleted(entry: Entry) {
      entry.completed = !entry.completed;
      this.entryService.updateCompleted(entry).subscribe();
    }
  
    addEntry(entry: Entry) {
      this.entryService.addEntry(entry).subscribe(() => 
      window.location.reload())
    }

}
