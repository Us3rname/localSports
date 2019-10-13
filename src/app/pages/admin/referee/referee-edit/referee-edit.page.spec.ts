import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeEditPage } from './referee-edit.page';

describe('RefereeEditPage', () => {
  let component: RefereeEditPage;
  let fixture: ComponentFixture<RefereeEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeEditPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
