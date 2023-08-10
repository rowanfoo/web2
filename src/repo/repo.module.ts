import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {CommonModule} from "@angular/common";
import {CategoryRepo} from "./repo/CategoryRepo";
import { BigChartRepo } from './repo/BigChartRepo';
import { NewsRepo } from './repo/NewsRepo';

@NgModule({
  declarations: [],
  imports: [
    HttpClientModule,
    CommonModule
  ],
  exports: [],
  providers: [ CategoryRepo , BigChartRepo ,NewsRepo],

})
export class RepoModule {
}
