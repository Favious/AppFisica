import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExponencialRegressionPage } from './exponencial-regression.page';

describe('ExponencialRegressionPage', () => {
  let component: ExponencialRegressionPage;
  let fixture: ComponentFixture<ExponencialRegressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExponencialRegressionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExponencialRegressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
