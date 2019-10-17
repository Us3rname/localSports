import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeasonCreatePage } from './season-create.page';

describe('SeasonCreatePage', () => {
  let component: SeasonCreatePage;
  let fixture: ComponentFixture<SeasonCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeasonCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeasonCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
