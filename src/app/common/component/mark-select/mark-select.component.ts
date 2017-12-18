import { Component, OnInit } from '@angular/core';
import {Mark} from '../../types';

@Component({
  selector: 'app-mark-select',
  templateUrl: './mark-select.component.html',
  styleUrls: ['./mark-select.component.css']
})
export class MarkSelectComponent implements OnInit {

  public marks: Mark[];

  constructor() { }

  public ngOnInit(): void {
    this.marks = [Mark.DNF, Mark.DNS, Mark.DSQ_C, Mark.DSQ_R];
  }

}
