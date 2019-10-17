import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonListPage } from './season-list.page';

describe('SeasonListPage', () => {
  let component: SeasonListPage;
  let fixture: ComponentFixture<SeasonListPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonListPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
