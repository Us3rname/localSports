import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueListPage } from './league-list.page';

describe('LeagueListPage', () => {
  let component: LeagueListPage;
  let fixture: ComponentFixture<LeagueListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueListPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
