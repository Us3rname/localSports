import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueEditPage } from './league-edit.page';

describe('LeagueEditPage', () => {
  let component: LeagueEditPage;
  let fixture: ComponentFixture<LeagueEditPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueEditPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueEditPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
