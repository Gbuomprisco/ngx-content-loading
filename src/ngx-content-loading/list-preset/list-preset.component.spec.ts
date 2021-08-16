import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPresetComponent } from './list-preset.component';

describe('ListPreset', () => {
  let component: ListPresetComponent;
  let fixture: ComponentFixture<ListPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
