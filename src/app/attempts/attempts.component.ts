import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {AttemptsRepo} from '../common/repos/attempts.repo';
import {BoatClass, OrdereredRunResults, Run, RunResults} from '../common/types';
import {MatTableDataSource} from '@angular/material';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AttemptsComponent implements OnInit {

  constructor(private _attemptsRepo: AttemptsRepo) {
  }

  public runs: Run[];
  public selectedRun: Run = Run.HeatRun1;

  public displayedColumns = ['bib', 'penalties', 'total', 'behind', 'qualified'];
  public dataSource = new MatTableDataSource<RunResults>();

  public ngOnInit(): void {
    this.runs = [Run.HeatRun1, Run.HeatRun2, Run.SemiFinal, Run.Final];
    this.selectRun();
  }

  public selectRun(): void {
    const runResults = this._attemptsRepo.searchByRunAndClass(this.selectedRun, BoatClass.C1M);
    this.dataSource.data = runResults.map((result: RunResults, index: number, results: RunResults[]) => {
      const behind = this.totalMs(result) - this.totalMs(results[0]);

      return new OrdereredRunResults(
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

  public totalMs(result: RunResults | OrdereredRunResults): number {
    return (result.stopTime.getTime() - result.startTime.getTime());
  }

}
