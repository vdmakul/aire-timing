import {Injectable} from '@angular/core';
import {Participant} from '../types';
import {Cache} from '../types/cache';

@Injectable()
export class ParticipantsRepo {

  private _cache: Cache<number, Participant> = new Cache();

  public load(bib: number): Participant {
    return this._cache.get(bib);
  }

  public save(participant: Participant): void {
    this._cache.put(participant.bib, participant);
  }

}
