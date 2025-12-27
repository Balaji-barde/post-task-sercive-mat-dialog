import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatDialogModule } from '@angular/material/dialog';
import { MatDividerModule } from '@angular/material/divider';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';




let matArr = [MatCardModule, MatButtonModule, MatDialogModule, MatDividerModule, MatIconModule, MatSnackBarModule, MatTooltipModule]
@NgModule({
  declarations: [],
  imports: [...matArr
  ],
  exports: [...matArr]

})
export class MaterialModule { }
