import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClasseComponent } from './add-classe.component';

describe('AddClasseComponent', () => {
  let component: AddClasseComponent;
  let fixture: ComponentFixture<AddClasseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClasseComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
