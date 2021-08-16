import { Defaults } from './defaults.enum';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
    selector: 'ngx-content-loading',
    templateUrl: './ngx-content-loading.component.html',
    styleUrls: [ './ngx-content-loading.component.scss' ],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgxContentLoadingComponent {
    @Input()
    public width: string | number = Defaults.Width;

    @Input()
    public height: string | number = Defaults.Height;

    @Input()
    public primaryColor: string = Defaults.PrimaryColor;

    @Input()
    public secondaryColor: string = Defaults.SecondaryColor;

    @Input()
    public speed: string = Defaults.Speed;

    @Input()
    public preserveAspectRatio: string = Defaults.PreserveAspectRatio;

    get viewBox(): string {
        return `0 0 ${this.width} ${this.height}`;
    }
}

