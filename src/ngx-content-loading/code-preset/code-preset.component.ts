import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '[ngx-code-preset]',
  templateUrl: './code-preset.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CodePresetComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }
}
