import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatFormFieldModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule} from '@angular/material';

const MAT_MODULES  = [
  NoopAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatTableModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MaterialModule { }
