import { Component, OnInit, Input } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat-details',
  templateUrl: './repeat-details.component.html',
  styleUrls: ['./repeat-details.component.css']
})
export class RepeatDetailsComponent implements OnInit {

  @Input() repeat:Repeat;
  constructor() { }

  ngOnInit() {
  }

}
