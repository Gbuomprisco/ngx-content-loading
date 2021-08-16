import { Component, Input } from '@angular/core';
import { SvgElementComponent } from '../svg-element/svg-element.component';
import { Defaults } from '../defaults.enum';
import { NgxContentLoadingComponent } from '../ngx-content-loading.component';

@Component({
  selector: '[ngx-rect]',
  templateUrl: './rect.component.html',
  styleUrls: ['./rect.component.scss']
})
export class RectComponent extends SvgElementComponent {
    @Input() public y: string;
    @Input() public x: string;
    @Input() public rx: string = Defaults.Rx;
    @Input() public ry: string = Defaults.Ry;
    @Input() public width: string;
    @Input() public height: string;
    @Input() public primaryColor: string;
    @Input() public secondaryColor: string;
    @Input() public speed: string;

    constructor(public content: NgxContentLoadingComponent) {
        super(content);
    }
}
