import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCreatePage } from './team-create.page';

describe('TeamCreatePage', () => {
  let component: TeamCreatePage;
  let fixture: ComponentFixture<TeamCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeamCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
