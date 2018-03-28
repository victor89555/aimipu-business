import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadQiniuComponent } from './upload-qiniu.component';

describe('UploadQiniuComponent', () => {
  let component: UploadQiniuComponent;
  let fixture: ComponentFixture<UploadQiniuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadQiniuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadQiniuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
