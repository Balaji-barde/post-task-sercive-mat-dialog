import { Component, Input, OnInit } from '@angular/core';
import { Imovies } from '../../models/movies';
import { MovieService } from '../../service/movie.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { GetConfirmComponent } from '../get-confirm/get-confirm.component';
import { SnackbarService } from '../../service/snackbar.service';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-card',
  templateUrl: './movie-card.component.html',
  styleUrls: ['./movie-card.component.scss']
})
export class MovieCardComponent implements OnInit {
  @Input() movie!: Imovies
  constructor(private _movieService: MovieService,
    private _dialog: MatDialog,
    private _snackBar: SnackbarService
  ) { }

  ngOnInit(): void {
  }

  onRemove() {
    let matcofig = new MatDialogConfig();
    matcofig.data = `Are u sure, Do u want to remove this movies?`;
    matcofig.disableClose = true;
    matcofig.width = '400px'

    let dialogRef = this._dialog.open(GetConfirmComponent, matcofig)
    dialogRef.afterClosed()
      .subscribe({
        next: res => {
          console.log(res);
          if (res) {
            this._snackBar.snackBar('This movie remove successfully!!!')
            this._movieService.movieRemove(this.movie)

          }
        }, error: err => {
          console.log(err);
          this._snackBar.snackBar(err)

        }
      })
  }


  onEdit(){
  const dialogCofig = new MatDialogConfig()
  dialogCofig.disableClose=true;
  dialogCofig.data=this.movie
  this._dialog.open(MovieFormComponent,dialogCofig)
  }

}
