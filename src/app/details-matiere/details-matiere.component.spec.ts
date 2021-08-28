import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsMatiereComponent } from './details-matiere.component';

describe('DetailsMatiereComponent', () => {
  let component: DetailsMatiereComponent;
  let fixture: ComponentFixture<DetailsMatiereComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailsMatiereComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsMatiereComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
