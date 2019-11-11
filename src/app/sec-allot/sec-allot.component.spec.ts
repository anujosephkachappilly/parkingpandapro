import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecAllotComponent } from './sec-allot.component';

describe('SecAllotComponent', () => {
  let component: SecAllotComponent;
  let fixture: ComponentFixture<SecAllotComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecAllotComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecAllotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
