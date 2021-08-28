import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsCourComponent } from './details-cour.component';

describe('DetailsCourComponent', () => {
  let component: DetailsCourComponent;
  let fixture: ComponentFixture<DetailsCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
