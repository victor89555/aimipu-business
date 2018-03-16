import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsumptionRecordComponent } from './consumption-record.component';

describe('ConsumptionRecordComponent', () => {
  let component: ConsumptionRecordComponent;
  let fixture: ComponentFixture<ConsumptionRecordComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConsumptionRecordComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsumptionRecordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
