import { Component, inject, OnInit } from '@angular/core';
import { MovieService } from '../../service/movie.service';
import { Imovies } from '../../models/movies';
import { SnackbarService } from '../../service/snackbar.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MovieFormComponent } from '../movie-form/movie-form.component';

@Component({
  selector: 'app-movie-dash',
  templateUrl: './movie-dash.component.html',
  styleUrls: ['./movie-dash.component.scss'],
})
export class MovieDashComponent implements OnInit {
  movies: Array<Imovies> = [];

  private _snackBar = inject(SnackbarService)
  constructor(private _movieService: MovieService,
    private _matDialog: MatDialog
  ) { }

  ngOnInit(): void {

    this.getMovies()

  }

  getMovies() {
    this._movieService.fetchAllData().subscribe({
      next: (res) => {
        if (res) {
          this.movies = res.data;
        }
        this._snackBar.snackBar('movies got successfully!!!!')
      },
    });
  }

  // onOpen() {
  //   const matcofig = new MatDialogConfig()
  //   matcofig.disableClose = true

  //   let dialogRef = this._matDialog.open(MovieFormComponent, matcofig)
  //   dialogRef.afterClosed().subscribe({
  //     next:res=>{
  //       console.log();
        
  //     }
  //   })
  // }

// onOpen() {
//   const dialogRef = this._matDialog.open(MovieFormComponent, {
//     disableClose: true
//   });

//   dialogRef.afterClosed().subscribe((movie: Imovies) => {
//     if (movie) {
//       // ✅ Add movie to service
//       this._movieService.addMovies(movie);

//       // ✅ Refresh UI list
//       this.movies = [...this._movieService.moviesArr];

//       // ✅ Show success message
//       this._snackBar.snackBar('Movie added successfully!');
//     }
//   });
// }


//
onOpen() {
  const dialogRef = this._matDialog.open(MovieFormComponent, {
    disableClose: true
  });

  dialogRef.afterClosed().subscribe((movie: Imovies) => {
    if (movie) {
      this._movieService.addMovies(movie);

      this.movies = [...this._movieService.moviesArr];

      this._snackBar.snackBar('Movie added successfully!');
    }
  });
}

}
