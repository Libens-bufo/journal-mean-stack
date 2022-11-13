import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule}  from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { ButtonComponent } from './components/button/button.component';
import { JournalComponent } from './components/journal/journal.component';
import { JournalEntryComponent } from './components/journal-entry/journal-entry.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddEntryComponent } from './components/add-entry/add-entry.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    JournalComponent,
    JournalEntryComponent,
    AddEntryComponent
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
