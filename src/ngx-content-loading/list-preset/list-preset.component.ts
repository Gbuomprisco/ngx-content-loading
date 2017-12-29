import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '[ngx-list-preset]',
  templateUrl: './list-preset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListPresetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
