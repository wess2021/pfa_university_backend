import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMatiereComponent } from './add-matiere.component';

describe('AddMatiereComponent', () => {
  let component: AddMatiereComponent;
  let fixture: ComponentFixture<AddMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
