import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {BoatClass, Run} from '../../types';

@Component({
  selector: 'app-class-select',
  templateUrl: './class-select.component.html',
  styleUrls: ['./class-select.component.css']
})
export class ClassSelectComponent implements OnInit {

  public classes: BoatClass[];

  @Output()
  public selectedClass: EventEmitter<BoatClass> = new EventEmitter<BoatClass>();

  constructor() { }

  public ngOnInit(): void {
    this.classes = [BoatClass.C1M, BoatClass.C2M, BoatClass.K1M, BoatClass.K1W];
  }

}
