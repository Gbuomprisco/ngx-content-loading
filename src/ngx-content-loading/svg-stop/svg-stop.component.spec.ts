import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgStopComponent } from './svg-stop.component';

describe('SvgStopComponent', () => {
  let component: SvgStopComponent;
  let fixture: ComponentFixture<SvgStopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgStopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgStopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
