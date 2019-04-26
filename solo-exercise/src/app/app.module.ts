import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisionsComponent } from './divisions/divisions.component';
import { FunWithTagsComponent } from './fun-with-tags/fun-with-tags.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisionsComponent,
    FunWithTagsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
