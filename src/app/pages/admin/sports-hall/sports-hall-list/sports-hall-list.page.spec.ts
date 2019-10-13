import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHallListPage } from './sports-hall-list.page';

describe('SportsHallListPage', () => {
  let component: SportsHallListPage;
  let fixture: ComponentFixture<SportsHallListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsHallListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHallListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
