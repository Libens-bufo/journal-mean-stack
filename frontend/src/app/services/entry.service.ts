import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders}  from '@angular/common/http'
import {Entry} from '../Entry';


import { Observable, of} from 'rxjs';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})
export class EntryService {
  
  private apiUrl = 'http://localhost:2121/journal';

  constructor(private http: HttpClient) { }

  getJournal(): Observable<Entry[]>{
    return this.http.get<Entry[]>(this.apiUrl);
  }

  deleteEntry(entry: Entry): Observable<Entry> {
    
    const entryID = JSON.stringify({
      'entryID': entry._id
    })
    
    const httpOptionsDelete = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: entryID
    };
    console.log(entry._id)
    return this.http.delete<Entry>(`${this.apiUrl}/deleteItem`, httpOptionsDelete);
  }

  updateCompleted(entry: Entry): Observable<Entry> {
   
    const request = 
    {
      "entryID": `${entry._id}`,
      "completed": `${entry.completed}`
    }
    const body = JSON.stringify(request)

    return this.http.put<Entry>(`${this.apiUrl}/toggleComplete`, body, httpOptions);
  }

  addEntry(entry: Entry): Observable<Entry> {
    return this.http.post<Entry>(`${this.apiUrl}/createItem`, entry, httpOptions);
  }
}
