import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsDepartementComponent } from './details-departement.component';

describe('DetailsDepartementComponent', () => {
  let component: DetailsDepartementComponent;
  let fixture: ComponentFixture<DetailsDepartementComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsDepartementComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsDepartementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
