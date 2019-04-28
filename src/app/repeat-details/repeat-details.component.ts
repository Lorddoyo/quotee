import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat-details',
  templateUrl: './repeat-details.component.html',
  styleUrls: ['./repeat-details.component.css']
})
export class RepeatDetailsComponent implements OnInit {

  @Input() repeat:Repeat;
  @Output() isComplete=new EventEmitter<boolean>();

  repeatComplete(complete:boolean){
    this.isComplete.emit(complete);
  }
  constructor() { }

  ngOnInit() {
  }

}
