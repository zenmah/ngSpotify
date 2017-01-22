import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import {HttpModule} from '@angular/http'

import { AppComponent } from './app.component';
import { routing } from './app.routes'


import { AboutComponent } from './components/about/about.component'
import { SearchComponent } from './components/search/search.component'
import {SpotifyService} from './components/search/shared/spotify.service'
import { NavbarComponent } from './components/navbar/navbar.component'

@NgModule({
  imports: [BrowserModule, routing, FormsModule,HttpModule],
  declarations: [AppComponent, AboutComponent, NavbarComponent, SearchComponent],
  bootstrap: [AppComponent],
  providers:[SpotifyService]
})
export class AppModule { }
