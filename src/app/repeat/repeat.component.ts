import { Component, OnInit } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  repeats = [
    new Repeat(1,'I am who I am'),
    new Repeat(2,'Love Yours'),
  ]

  constructor() { }

  ngOnInit() {
  }

}
