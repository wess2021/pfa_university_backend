import { TestBed, inject } from '@angular/core/testing';

import { NoteInfoService } from './note-info.service';

describe('NoteInfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NoteInfoService]
    });
  });

  it('should be created', inject([NoteInfoService], (service: NoteInfoService) => {
    expect(service).toBeTruthy();
  }));
});
