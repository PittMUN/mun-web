import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighschoolConferenceComponent } from './highschool-conference.component';

describe('HighschoolConferenceComponent', () => {
  let component: HighschoolConferenceComponent;
  let fixture: ComponentFixture<HighschoolConferenceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighschoolConferenceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighschoolConferenceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
