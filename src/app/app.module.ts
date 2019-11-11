import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { FilmComponent } from './film/film.component';
import { ListeComponent } from './liste/liste.component';

@NgModule({
  declarations: [
    AppComponent,
    FilmComponent,
    ListeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
