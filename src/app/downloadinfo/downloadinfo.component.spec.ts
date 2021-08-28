import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DownloadinfoComponent } from './downloadinfo.component';

describe('DownloadinfoComponent', () => {
  let component: DownloadinfoComponent;
  let fixture: ComponentFixture<DownloadinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DownloadinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DownloadinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
