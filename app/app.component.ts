import { Component } from '@angular/core';
import {AboutComponent, NavbarComponent, SearchComponent} from './components'

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl:'app.html'
})
export class AppComponent  { name = 'Angular'; }
