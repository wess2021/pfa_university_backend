import { TestBed, inject } from '@angular/core/testing';

import { CourService } from './cour.service';

describe('CourService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CourService]
    });
  });

  it('should be created', inject([CourService], (service: CourService) => {
    expect(service).toBeTruthy();
  }));
});
