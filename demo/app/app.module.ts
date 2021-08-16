import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxContentLoadingModule } from '../../src/ngx-content-loading.module';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CommonModule,
    NgxContentLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
