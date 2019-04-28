import { Component, OnInit } from '@angular/core';
import {Repeat} from '../repeat'

@Component({
  selector: 'app-repeat',
  templateUrl: './repeat.component.html',
  styleUrls: ['./repeat.component.css']
})
export class RepeatComponent implements OnInit {

  repeats = [
    new Repeat(1,'By C.S.Lewis','The greatest trick the Devil ever pulled was convincing the world he didn’t exist','Lorddoyo', new Date(2019,4,28)),
    new Repeat(2,'By Jermaine Lamarr Cole','Love Yours','Lorddoyo', new Date(2019,4,28)),
  ]


  deleteRepeat(isComplete,index){
    if (isComplete){
        let toDelete=confirm(`Are You sure you want to delete ${this.repeats[index].name}`)


       if (toDelete) {
          this.repeats.splice(index,1);
       }
    }
  }

  addNewRepeat(repeat){
    let repeatLength = this.repeats.length;
    repeat.id=repeatLength+1;
    repeat.author= repeat.author;
    repeat.name= repeat.name
    repeat.date = new Date(repeat.date)
    this.repeats.push(repeat)
  }

toogleDetails(index){
  this.repeats[index].showDescription = !this.repeats[index].showDescription;
}

constructor() { }

ngOnInit() {
}
}
