import { Defaults } from './../defaults.enum';
import { ChangeDetectionStrategy, Component, OnInit, Input } from '@angular/core';
import { NgxContentLoadingComponent } from '../index';

@Component({
  selector: 'ngx-svg-element',
  templateUrl: './svg-element.component.html',
  styleUrls: ['./svg-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgElementComponent implements OnInit {
    public clipPathId: string = getId();
    public linearGradientId: string = getId();

    public get clipPathUrl(): string {
        return `url(#${this.clipPathId})`;
    }

    public get linearGradientUrl(): string {
        return `url(#${this.linearGradientId})`;
    }

    constructor(public content: NgxContentLoadingComponent) { }

    ngOnInit() {
    }
}

export function getId(): string {
    const id = performance.now() * Math.random();
    return id.toString();
}
