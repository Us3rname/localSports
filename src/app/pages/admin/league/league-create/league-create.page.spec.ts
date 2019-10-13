import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeagueCreatePage } from './league-create.page';

describe('LeagueCreatePage', () => {
  let component: LeagueCreatePage;
  let fixture: ComponentFixture<LeagueCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LeagueCreatePage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeagueCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
