import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DictionarypageComponent } from './dictionary/dictionarypage/dictionarypage.component';
import { DictionarydetailComponent } from './dictionary/dictionarydetail/dictionarydetail.component';

@NgModule({
  declarations: [
    AppComponent,
    DictionarypageComponent,
    DictionarydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
