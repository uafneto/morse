import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatInputModule } from '@angular/material/input';

import { CardInputComponent } from './cards/input/card-input.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { CardOutputComponent } from './cards/output/card-output.component';

@NgModule({
  declarations: [
    CardInputComponent,
    ToolbarComponent,
    CardOutputComponent
  ],

  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    MatInputModule
  ],

  exports: [
    CardInputComponent,
    CardOutputComponent,
    ToolbarComponent
  ],
})

export class CoreModule { }
