import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubListPage } from './club-list.page';

describe('ClubListPage', () => {
  let component: ClubListPage;
  let fixture: ComponentFixture<ClubListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
