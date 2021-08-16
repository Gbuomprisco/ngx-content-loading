import { Component, Input, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: '[ngx-svg-stop]',
  templateUrl: './svg-stop.component.html',
  styleUrls: ['./svg-stop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStopComponent {
    @Input() speed: string;
    @Input() values: string;
    @Input() opacity: string;

    @HostBinding('attr.offset')
    @Input()
    public offset: string;

    @HostBinding('attr.stop-color')
    @Input()
    public color: string;
}
