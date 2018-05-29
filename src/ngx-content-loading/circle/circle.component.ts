import { Component, Input, OnInit } from '@angular/core';
import { SvgElementComponent } from '../svg-element/svg-element.component';
import { NgxContentLoadingComponent } from '../ngx-content-loading.component';

@Component({
  selector: '[ngx-circle]',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent extends SvgElementComponent {
    @Input() public r: string;
    @Input() public cx: string;
    @Input() public cy: string;

    constructor(public content: NgxContentLoadingComponent) {
        super(content);
    }
}
