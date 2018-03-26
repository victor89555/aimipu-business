import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TrialApplicationListComponent } from './trial-application-list.component';

describe('TrialApplicationListComponent', () => {
  let component: TrialApplicationListComponent;
  let fixture: ComponentFixture<TrialApplicationListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TrialApplicationListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TrialApplicationListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
