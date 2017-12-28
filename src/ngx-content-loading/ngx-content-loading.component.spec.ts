import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxContentLoaderComponent } from './ngx-content-loader.component';

describe('NgxContentLoaderComponent', () => {
  let component: NgxContentLoaderComponent;
  let fixture: ComponentFixture<NgxContentLoaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgxContentLoaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgxContentLoaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
