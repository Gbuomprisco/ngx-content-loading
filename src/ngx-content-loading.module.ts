import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxContentLoadingComponent } from './ngx-content-loading/ngx-content-loading.component';
import { RectComponent } from './ngx-content-loading/rect/rect.component';
import { SvgElementComponent } from './ngx-content-loading/svg-element/svg-element.component';
import { SvgStopComponent } from './ngx-content-loading/svg-stop/svg-stop.component';
import { FacebookPresetComponent } from './ngx-content-loading/facebook-preset/facebook-preset.component';
import { InstagramPresetComponent } from './ngx-content-loading/instagram-preset/instagram-preset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxContentLoadingComponent,
    RectComponent,
    SvgElementComponent,
    SvgStopComponent,
    FacebookPresetComponent,
    InstagramPresetComponent
  ],
  exports: [
    NgxContentLoadingComponent,
    RectComponent,
    FacebookPresetComponent,
    InstagramPresetComponent
  ]
})
export class NgxContentLoadingModule { }
