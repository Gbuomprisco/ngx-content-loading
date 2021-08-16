import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InstagramPresetComponent } from './instagram-preset.component';

describe('InstagramPresetComponent', () => {
  let component: InstagramPresetComponent;
  let fixture: ComponentFixture<InstagramPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InstagramPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InstagramPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
