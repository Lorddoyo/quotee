import { Component } from '@angular/core';
import {Repeat} from './repeat'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repeats = [
    new Repeat(1,'I am who I am','Lorddoyo','By The One True Living God',new Date(2019,4,28)),
    new Repeat(2,'Love Yours','Adano','By Jermaine Lamarr Cole',new Date(2019,4,28)),
  ]

}
