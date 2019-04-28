import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat/repeat.component';
import { RepeatDetailsComponent } from './repeat-details/repeat-details.component';
import { HighlightDirective } from './highlight.directive';
import { DateCounterPipe } from './date-counter.pipe';
import { RepeatFormComponent } from './repeat-form/repeat-form.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatComponent,
    RepeatDetailsComponent,
    HighlightDirective,
    DateCounterPipe,
    RepeatFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
