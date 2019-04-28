import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-repeat-form',
  templateUrl: './repeat-form.component.html',
  styleUrls: ['./repeat-form.component.css']
})
export class RepeatFormComponent implements OnInit {
  newReapet=new Reapet(0,"","",new Date());

  constructor() { }

  ngOnInit() {
  }

}
