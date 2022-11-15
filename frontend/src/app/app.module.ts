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
import { RouterModule, Routes } from '@angular/router';
import { SplashComponent } from './components/splash/splash.component';
import { DrinkComponent } from './components/rating/drinks/drink/drink.component';
import { DrinksComponent } from './components/rating/drinks/drinks/drinks.component';
import { MoodRatingComponent } from './components/rating/mood/mood-rating/mood-rating.component';
import { MoodRatingItemComponent } from './components/rating/mood/mood-rating-item/mood-rating-item.component';


const routes: Routes = [
  {path: 'journal', component: JournalComponent},
  {path: 'welcome', component: SplashComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ButtonComponent,
    JournalComponent,
    JournalEntryComponent,
    AddEntryComponent,
    SplashComponent,
    DrinkComponent,
    DrinksComponent,
    MoodRatingComponent,
    MoodRatingItemComponent,
  ],
  imports: [
    BrowserModule,
    FontAwesomeModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[JournalComponent, HeaderComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
