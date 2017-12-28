import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: '[ngx-instagram-preset]',
  templateUrl: './instagram-preset.component.html',
  styleUrls: ['./instagram-preset.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InstagramPresetComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
