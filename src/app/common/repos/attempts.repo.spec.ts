import { TestBed, inject } from '@angular/core/testing';

import { AttemptsRepo } from './attempts.repo';

describe('AttemptsRepo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AttemptsRepo]
    });
  });

  it('should be created', inject([AttemptsRepo], (service: AttemptsRepo) => {
    expect(service).toBeTruthy();
  }));
});
