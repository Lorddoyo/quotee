import { Component, OnInit } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  repeats = [
    new Repeat(1,'I am who I am','By The One True Living God',new Date(2019,4,28)),
    new Repeat(2,'Love Yours','By Jermaine Lamarr Cole',new Date(2019,4,28)),
  ]


  deleteRepeat(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are You sure you want to delete ${this.repeats[index].name}`)


       if (toDelete) {
          this.repeats.splice(index,1);
       }
    }
  }
toogleDetails(index){
  this.repeats[index].showDescription = !this.repeats[index].showDescription;
}

constructor() { }

ngOnInit() {
}
}
