import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BulletListPresetComponent } from './bullet-list-preset.component';

describe('BulletListPreset', () => {
  let component: BulletListPresetComponent;
  let fixture: ComponentFixture<BulletListPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BulletListPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BulletListPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
