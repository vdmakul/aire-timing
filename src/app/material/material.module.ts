import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {
  MatButtonToggleModule,
  MatExpansionModule, MatFormFieldModule, MatGridListModule, MatInputModule, MatOptionModule, MatSelectModule, MatTableModule,
  MatToolbarModule
} from '@angular/material';

const MAT_MODULES  = [
  NoopAnimationsModule,
  MatInputModule,
  MatSelectModule,
  MatOptionModule,
  MatFormFieldModule,
  MatTableModule,
  MatGridListModule,
  MatToolbarModule,
  MatExpansionModule,
  MatButtonToggleModule
];

@NgModule({
  imports: MAT_MODULES,
  exports: MAT_MODULES,
  declarations: []
})
export class MaterialModule { }
