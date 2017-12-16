import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {AttemptsRepo} from "../common/repos/attempts.repo";
import {Attempt, BoatClass, Run, RunResults} from "../common/types";

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttemptsComponent implements OnInit {

  constructor(private _attemptsRepo: AttemptsRepo) { }

  public runResults: RunResults[];

  public ngOnInit(): void {
    this.runResults = this._attemptsRepo.searchByRunAndClass(Run.Final, BoatClass.C1M);
  }



}
