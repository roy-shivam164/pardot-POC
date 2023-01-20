import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { OrgChartModule } from '@mondal/org-chart';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DialogComponent } from './dialog/dialog.component';
@NgModule({
  imports:      [ BrowserModule, FormsModule, OrgChartModule ,MatDialogModule,BrowserAnimationsModule],
  declarations: [ AppComponent, HelloComponent,DialogComponent],
  entryComponents:[DialogComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
