import { Injectable } from '@angular/core';
import {AttemptsRepo} from "./attempts.repo";
import {Attempt, BoatClass, Mark, Run, RunResults} from "../types";

@Injectable()
export class MockData {

  constructor(private _attempsRepo: AttemptsRepo) {

    this._attempsRepo.save(
      new Attempt(123, Run.Final, BoatClass.C1M),
      new RunResults(new Date(), new Date(), [], [], ""));
    this._attempsRepo.save(
      new Attempt(456, Run.Final, BoatClass.C1M),
      new RunResults(new Date(), new Date(), [], [], ""));
  }

}
