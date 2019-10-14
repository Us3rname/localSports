import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatchScheduleCreatePage } from './match-schedule-create.page';

describe('MatchScheduleCreatePage', () => {
  let component: MatchScheduleCreatePage;
  let fixture: ComponentFixture<MatchScheduleCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchScheduleCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatchScheduleCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
