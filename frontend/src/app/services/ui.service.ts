import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UiService {
  private showCreateEntry: boolean = false;
  private subject = new Subject<any>();

  constructor() { }

  togggleShowCreateEntry(){
    this.showCreateEntry = !this.showCreateEntry;
    this.subject.next(this.showCreateEntry);
  }
  onToggleShowCreateEntry(){
    return this.subject.asObservable();
  }


}
