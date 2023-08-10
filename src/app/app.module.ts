import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MaterialModule} from "./material.module";
import { HelloWorldComponentComponent } from './hello-world-component/hello-world-component.component';
import {FlexLayoutModule} from "@angular/flex-layout";
import {DataTablesModule} from "angular-datatables";
import {RepoModule} from "../repo/repo.module";
import { BigchartviewComponent } from './bigchart/bigchartview/bigchartview.component';
import { RouterModule } from '@angular/router';
import { NewsListComponent } from './news-list/news-list.component';
import { CategoryallComponent } from './categoryall/categoryall.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponentComponent,
    BigchartviewComponent,
    NewsListComponent,
    CategoryallComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    FlexLayoutModule,
    DataTablesModule,
    RepoModule,
    RouterModule.forRoot([
      // { path: '', component: HelloWorldComponentComponent },
      { path: '', component: CategoryallComponent },
      { path: 'bigchart/:mode/:code', component: BigchartviewComponent },
      { path: 'news/:code', component: NewsListComponent },
      { path: 'week', component: HelloWorldComponentComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
