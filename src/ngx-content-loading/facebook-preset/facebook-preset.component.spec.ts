import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacebookPresetComponent } from './facebook-preset.component';

describe('FacebookPresetComponent', () => {
  let component: FacebookPresetComponent;
  let fixture: ComponentFixture<FacebookPresetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacebookPresetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacebookPresetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
