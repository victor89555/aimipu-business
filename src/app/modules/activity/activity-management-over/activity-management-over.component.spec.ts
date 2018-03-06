import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivityManagementOverComponent } from './activity-management-over.component';

describe('ActivityManagementOverComponent', () => {
  let component: ActivityManagementOverComponent;
  let fixture: ComponentFixture<ActivityManagementOverComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ActivityManagementOverComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ActivityManagementOverComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
