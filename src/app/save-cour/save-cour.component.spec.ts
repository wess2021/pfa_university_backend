import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SaveCourComponent } from './save-cour.component';

describe('SaveCourComponent', () => {
  let component: SaveCourComponent;
  let fixture: ComponentFixture<SaveCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SaveCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SaveCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
