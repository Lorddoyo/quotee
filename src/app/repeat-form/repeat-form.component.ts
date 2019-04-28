import { Component, OnInit } from '@angular/core';
import {Repeat} from '../repeat';

@Component({
  selector: 'app-repeat-form',
  templateUrl: './repeat-form.component.html',
  styleUrls: ['./repeat-form.component.css']
})
export class RepeatFormComponent implements OnInit {
  newRepeat=new Repeat(0,"","","",new Date());

  constructor() { }

  ngOnInit() {
  }

}
