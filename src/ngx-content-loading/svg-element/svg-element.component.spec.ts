import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SvgElementComponent } from './svg-element.component';

describe('SvgElementComponent', () => {
  let component: SvgElementComponent;
  let fixture: ComponentFixture<SvgElementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SvgElementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SvgElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
