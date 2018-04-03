import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PicViewerComponent } from './pic-viewer.component';

describe('PicViewerComponent', () => {
  let component: PicViewerComponent;
  let fixture: ComponentFixture<PicViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PicViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PicViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
