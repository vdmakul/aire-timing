import { Component } from '@angular/core';
import {MockData} from "./common/repos/mock.data";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';


  constructor(private _mockData: MockData) {
  }
}
