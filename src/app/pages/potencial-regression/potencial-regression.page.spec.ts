import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PotencialRegressionPage } from './potencial-regression.page';

describe('PotencialRegressionPage', () => {
  let component: PotencialRegressionPage;
  let fixture: ComponentFixture<PotencialRegressionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PotencialRegressionPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PotencialRegressionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
