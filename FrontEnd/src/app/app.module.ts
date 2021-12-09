import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaComponent } from './estado/lista/lista.component';
import { HttpClientModule } from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonModule} from 'primeng/button';
import {ChartModule} from 'primeng/chart';
import {MenubarModule} from 'primeng/menubar';
import {MenuItem} from 'primeng/api';
import {TableModule} from 'primeng/table';
import { FormsModule } from '@angular/forms';
import {CardModule} from 'primeng/card';
import {InputTextModule} from 'primeng/inputtext';
import {ProgressSpinnerModule} from 'primeng/progressspinner';
import {CalendarModule} from 'primeng/calendar';







@NgModule({
  declarations: [
    AppComponent,
    ListaComponent,
  ],
  imports: [
    BrowserModule,
    ButtonModule,
    ChartModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    MenubarModule,
    TableModule,
    FormsModule,
    CardModule,
    InputTextModule,
    ProgressSpinnerModule,
    CalendarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
