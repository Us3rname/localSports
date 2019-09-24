import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ClubCreatePage } from './club-create.page';

describe('ClubCreatePage', () => {
  let component: ClubCreatePage;
  let fixture: ComponentFixture<ClubCreatePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ClubCreatePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClubCreatePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
