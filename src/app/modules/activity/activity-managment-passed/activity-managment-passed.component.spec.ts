import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagmentPassedComponent } from './activity-managment-passed.component';

describe('ActivityManagmentPassedComponent', () => {
  let component: ActivityManagmentPassedComponent;
  let fixture: ComponentFixture<ActivityManagmentPassedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagmentPassedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagmentPassedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
