import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NgxContentLoadingComponent } from './ngx-content-loading/ngx-content-loading.component';
import { RectComponent } from './ngx-content-loading/rect/rect.component';
import { SvgElementComponent } from './ngx-content-loading/svg-element/svg-element.component';
import { SvgStopComponent } from './ngx-content-loading/svg-stop/svg-stop.component';
import { FacebookPresetComponent } from './ngx-content-loading/facebook-preset/facebook-preset.component';
import { InstagramPresetComponent } from './ngx-content-loading/instagram-preset/instagram-preset.component';
import { CircleComponent } from './ngx-content-loading/circle/circle.component';
import { CodePresetComponent } from './ngx-content-loading/code-preset/code-preset.component';
import { BulletListPresetComponent } from './ngx-content-loading/bullet-list-preset/bullet-list-preset.component';
import { ListPresetComponent } from './ngx-content-loading/list-preset/list-preset.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgxContentLoadingComponent,
    RectComponent,
    CircleComponent,
    SvgElementComponent,
    SvgStopComponent,
    FacebookPresetComponent,
    InstagramPresetComponent,
    CodePresetComponent,
    BulletListPresetComponent,
    ListPresetComponent
  ],
  exports: [
    NgxContentLoadingComponent,
    RectComponent,
    CircleComponent,
    FacebookPresetComponent,
    InstagramPresetComponent,
    CodePresetComponent,
    BulletListPresetComponent,
    ListPresetComponent
  ]
})
export class NgxContentLoadingModule { }
