import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeaqueListPage } from './leaque-list.page';

describe('LeaqueListPage', () => {
  let component: LeaqueListPage;
  let fixture: ComponentFixture<LeaqueListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeaqueListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeaqueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
