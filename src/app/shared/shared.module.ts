import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResponsiveHelperComponent } from './components/responsive-helper/responsive-helper.component';
import { ClickOutsideDirective } from './directives/click-outside.directive';
import { NewsDialogComponent } from './components/news-dialog/news-dialog.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import {MatDialogModule} from '@angular/material/dialog';
@NgModule({
  declarations: [ResponsiveHelperComponent, ClickOutsideDirective, NewsDialogComponent],
  imports: [CommonModule, ReactiveFormsModule, FormsModule,RouterModule, MatDialogModule,],
  exports: [ResponsiveHelperComponent, ClickOutsideDirective],
})
export class SharedModule {}
