import { Component, OnInit } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  repeats = [
    new Repeat(1,'I am who I am','By The One True Living God'),
    new Repeat(2,'Love Yours','Jermaine Lamarr Cole'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
