import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DictionarypageComponent} from "./dictionary/dictionarypage/dictionarypage.component";
import {DictionarydetailComponent} from "./dictionary/dictionarydetail/dictionarydetail.component";

const routes: Routes = [
  {
    path: 'dictionary',
    component: DictionarypageComponent,
    children:[{
      path: ':word',
      component: DictionarydetailComponent
    }]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
