import { Component, OnInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material';
import {Attempt, BoatClass, Gate, Run, RunResults} from '../common/types';

@Component({
  selector: 'app-scoring',
  templateUrl: './scoring.component.html',
  styleUrls: ['./scoring.component.css']
})
export class ScoringComponent implements OnInit {

  // public displayedColumns = ['bib', 'startTime', 'penalties4', 'penalties5', 'penalties6', 'penalties7', 'stopTime', 'marks', 'comment'];
  public displayedColumns = ['bib', 'penalties4', 'penalties5', 'penalties6', 'penalties7', 'marks', 'comment'];
  public dataSource = new MatTableDataSource<RunResults>();
  public newEntryDataSource = new MatTableDataSource<RunResults>();

  public gates: Gate[];

  constructor() { }

  public ngOnInit(): void {
    this.gates = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
      .map((i: number) => new Gate(i, i % 5 === 0));

    this.dataSource.data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((bib: number) => {
      const attempt = new Attempt(bib, Run.HeatRun1, BoatClass.K1W);
      return new RunResults(attempt, null, null, [], []);
    });

    this.newEntryDataSource.data = [new RunResults(new Attempt(null, Run.HeatRun1, BoatClass.K1W), null, null, [], [])];
  }

}
