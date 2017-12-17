import {Component, OnDestroy, OnInit, ViewChild, ViewEncapsulation} from '@angular/core';
import {AttemptsRepo} from '../common/repos/attempts.repo';
import {BoatClass, AuxRunResults, Run, RunResults} from '../common/types';
import {MatTableDataSource} from '@angular/material';
import {ParticipantsRepo} from '../common/repos/participants.repo';
import {RunSelectComponent} from '../common/component/run-select/run-select.component';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttemptsComponent implements OnInit, OnDestroy {

  constructor(
    private _attemptsRepo: AttemptsRepo,
    private _participantsRepo: ParticipantsRepo) {
  }

  public displayedColumns = ['bib', 'name', 'country', 'penalties', 'total', 'behind', 'qualified'];
  public dataSource = new MatTableDataSource<RunResults>();

  private _sub: Subscription;

  @ViewChild('runSelection')
  public runSelection: RunSelectComponent;

  public ngOnInit(): void {
    this._sub = this.runSelection.selectedRun.subscribe((run: Run) => this.selectRun(run));
  }

  public ngOnDestroy(): void {
    this._sub.unsubscribe();
  }

  public selectRun(selectedRun: Run): void {
    const runResults = this._attemptsRepo.searchByRunAndClass(selectedRun, BoatClass.C1M);
    this.dataSource.data = runResults.map((result: RunResults, index: number, results: RunResults[]) => {
      const behind = this.totalMs(result) - this.totalMs(results[0]);

      return new AuxRunResults(
        this._participantsRepo.load(result.attempt.bib),
        result.attempt,
        result.startTime,
        result.stopTime,
        result.penalties,
        result.marks,
        result.comments,
        behind,
        index < 10);
    });
  }

  public penalties(penalties: number[]): number {
    return penalties.reduce((previousValue, currentValue) => previousValue + currentValue);
  }

  public totalMs(result: RunResults | AuxRunResults): number {
    return (result.stopTime.getTime() - result.startTime.getTime());
  }

}
