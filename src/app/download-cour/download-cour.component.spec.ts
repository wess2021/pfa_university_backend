import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadCourComponent } from './download-cour.component';

describe('DownloadCourComponent', () => {
  let component: DownloadCourComponent;
  let fixture: ComponentFixture<DownloadCourComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadCourComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadCourComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
