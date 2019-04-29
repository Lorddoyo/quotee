import { Component } from '@angular/core';
import {Repeat} from './repeat'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repeats = [
    new Repeat(1,'The greatest trick the Devil ever pulled was convincing the world he didn’t exist','By C.S.Lewis','Lorddoyo',0,0,new Date(2019,4,28)),
    new Repeat(2,'Love Yours','By Jermaine Lamarr Cole','Adano',0,0,new Date(2019,4,28)),
      new Repeat(3,'By Zenas Muli','Kama unapenda watoto wa shule ambia bibi yako avae school uniform','Lorddoyo',0,0,new Date(2019,4,28))
  ]

}
