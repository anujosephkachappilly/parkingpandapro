import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecDeleteComponent } from './sec-delete.component';

describe('SecDeleteComponent', () => {
  let component: SecDeleteComponent;
  let fixture: ComponentFixture<SecDeleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecDeleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecDeleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
