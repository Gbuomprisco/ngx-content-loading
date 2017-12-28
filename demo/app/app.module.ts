import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NgxContentLoadingModule } from '../../src/ngx-content-loading.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    NgxContentLoadingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
