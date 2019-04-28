import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  repeats = [
    new Repeat(1,'I am who I am'),
    new Repeat(2,'Love Yours'),
  ]
}
