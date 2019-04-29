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



  repeatDelete(complete:boolean){
    this.isComplete.emit(complete);
  }

  repeatLike(repeat){
    repeat.like=repeat.like+1;
  }
  repeatDislike(repeat){
    repeat.dislike=repeat.dislike+1;
  }

  constructor() { }

  ngOnInit() {
  }

}
