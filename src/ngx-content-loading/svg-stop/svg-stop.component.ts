import { Component, Input, OnInit, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: '[ngx-svg-stop]',
  templateUrl: './svg-stop.component.html',
  styleUrls: ['./svg-stop.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SvgStopComponent implements OnInit {
    @Input() public speed: string;
    @Input() public values: string;

    @HostBinding('attr.offset')
    @Input()
    public offset: string;

    @HostBinding('attr.stop-color')
    @Input()
    public color: string;

    ngOnInit() {
    }
}
