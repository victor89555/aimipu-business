import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagmentFailComponent } from './activity-managment-fail.component';

describe('ActivityManagmentFailComponent', () => {
  let component: ActivityManagmentFailComponent;
  let fixture: ComponentFixture<ActivityManagmentFailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagmentFailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagmentFailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
