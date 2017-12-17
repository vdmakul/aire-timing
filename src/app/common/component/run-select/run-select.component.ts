import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Run} from '../../types';

@Component({
  selector: 'app-run-select',
  templateUrl: './run-select.component.html',
  styleUrls: ['./run-select.component.css']
})
export class RunSelectComponent implements OnInit {

  public runs: Run[];

  @Output()
  public selectedRun: EventEmitter<Run> = new EventEmitter<Run>();

  constructor() { }

  public ngOnInit(): void {
    this.runs = [Run.HeatRun1, Run.HeatRun2, Run.SemiFinal, Run.Final];
  }

}
