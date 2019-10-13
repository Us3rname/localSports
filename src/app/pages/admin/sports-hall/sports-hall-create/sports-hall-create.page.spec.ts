import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SportsHallCreatePage } from './sports-hall-create.page';

describe('SportsHallCreatePage', () => {
  let component: SportsHallCreatePage;
  let fixture: ComponentFixture<SportsHallCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SportsHallCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SportsHallCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
