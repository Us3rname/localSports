import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchScheduleListPage } from './match-schedule-list.page';

describe('MatchScheduleListPage', () => {
  let component: MatchScheduleListPage;
  let fixture: ComponentFixture<MatchScheduleListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchScheduleListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchScheduleListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
