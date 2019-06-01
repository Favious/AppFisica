import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealRegressionPage } from './lineal-regression.page';

describe('LinealRegressionPage', () => {
  let component: LinealRegressionPage;
  let fixture: ComponentFixture<LinealRegressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LinealRegressionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealRegressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
