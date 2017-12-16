import {Injectable} from '@angular/core';
import {Attempt, BoatClass, Run, RunResults} from "../types";
import {Cache} from "../types/cache";

@Injectable()
export class AttemptsRepo {

  private _cache: Cache<Attempt, RunResults> = new Cache();

  constructor() {
    console.log('AttemptsRepo created');
  }

  public load(attempt: Attempt): RunResults {
    return this._cache.get(attempt);
  }

  public save(attempt: Attempt, results: RunResults): void {
    this._cache.put(attempt, results);
  }

  public searchByBib(bib: number): RunResults[] {
    return this._cache.find((attempt: Attempt) => bib == attempt.bib);
  }

  public searchByRunAndClass(run: Run, boatClass: BoatClass): RunResults[] {
    return this._cache.find((attempt: Attempt) =>
      run == attempt.run && boatClass == attempt.boatClass);
  }


}
