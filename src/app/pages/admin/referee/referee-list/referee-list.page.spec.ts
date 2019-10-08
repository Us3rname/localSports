import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RefereeListPage } from './referee-list.page';

describe('RefereeListPage', () => {
  let component: RefereeListPage;
  let fixture: ComponentFixture<RefereeListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RefereeListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RefereeListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
