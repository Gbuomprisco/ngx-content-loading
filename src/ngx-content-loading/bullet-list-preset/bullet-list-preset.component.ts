import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '[ngx-bullet-list-preset]',
  templateUrl: './bullet-list-preset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BulletListPresetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
