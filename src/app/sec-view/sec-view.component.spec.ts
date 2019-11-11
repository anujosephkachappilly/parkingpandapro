import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecViewComponent } from './sec-view.component';

describe('SecViewComponent', () => {
  let component: SecViewComponent;
  let fixture: ComponentFixture<SecViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
