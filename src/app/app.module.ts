import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GridModule } from "@syncfusion/ej2-ng-grids";
import { PageService, SortService, FilterService, GroupService } from '@syncfusion/ej2-ng-grids';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, GridModule
  ],
  providers: [
   
    PageService,
    SortService,
    FilterService,
    GroupService

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
