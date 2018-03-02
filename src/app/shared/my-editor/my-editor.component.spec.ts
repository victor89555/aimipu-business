import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyEditorComponent } from './my-editor.component';

describe('MyEditorComponent', () => {
  let component: MyEditorComponent;
  let fixture: ComponentFixture<MyEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
