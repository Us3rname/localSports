import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaqueCreatePage } from './leaque-create.page';

describe('LeaqueCreatePage', () => {
  let component: LeaqueCreatePage;
  let fixture: ComponentFixture<LeaqueCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaqueCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaqueCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
