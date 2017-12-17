import { TestBed, inject } from '@angular/core/testing';

import { ParticipantsRepo } from './participants.repo';

describe('ParticipantsRepo', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParticipantsRepo]
    });
  });

  it('should be created', inject([ParticipantsRepo], (service: ParticipantsRepo) => {
    expect(service).toBeTruthy();
  }));
});
