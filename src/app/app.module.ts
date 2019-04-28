import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RepeatComponent } from './repeat/repeat.component';
import { RepeatDetailsComponent } from './repeat-details/repeat-details.component';

@NgModule({
  declarations: [
    AppComponent,
    RepeatComponent,
    RepeatDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
