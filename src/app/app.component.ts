import { Component } from '@angular/core';
import {Repeat} from './repeat'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repeats = [
    new Repeat(1,'I am who I am','By The One True Living God'),
    new Repeat(2,'Love Yours','Jermaine Lamarr Cole'),
  ]
}
