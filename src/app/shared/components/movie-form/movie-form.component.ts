import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Imovies } from '../../models/movies';
import { UuidService } from '../../service/uuid.service';
import { SnackbarService } from '../../service/snackbar.service';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MovieService } from '../../service/movie.service';

@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  @ViewChild('movieRef') movieRef!: NgForm
  isInEditMode: boolean = false
  movieData!: Imovies
  constructor(private _uuidService: UuidService,
    private _matDialogRef: MatDialogRef<MovieFormComponent>,
    private _snackBar: SnackbarService,
    private _movieService:MovieService,
    @Inject(MAT_DIALOG_DATA) getMovie: Imovies
  ) { this.movieData = getMovie }

  ngOnInit(): void {
    this.patchData()
  }


  AddMovies() {
    if (this.movieRef.valid) {
      let movieObj: Imovies = {
        ...this.movieRef.value, id: this._uuidService.UUID()
      }
      console.log(movieObj);
      // this.movieRef.reset();
      this._movieService.addMovies(movieObj)
        .subscribe({
          next : res =>{
            this._matDialogRef.close()
      this._snackBar.snackBar('The new movie addede successfully!!!!!')
      this.movieRef.reset()
          },
          error : err =>{
            console.log(err);
            
          }
        })
    }

  }

  onClose() {
    this._matDialogRef.close()
  }

  // patch data in the form
  patchData() {
    if (this.movieData) {
      this.isInEditMode = true
    }
    setTimeout(() => {
      this.movieRef.form.patchValue(this.movieData)
    }, 0);
  }



  onUpdate(){
    if(this.movieRef.valid){
     let updated_movie:Imovies={...this.movieRef.value,id:this.movieData.id
     }
     console.log(updated_movie);
     this._movieService.movieUpdate(updated_movie).subscribe({
      next:res=>{
        this._snackBar.snackBar('This movie card is updated successfully!!!!  ')
        this.movieRef.reset()
        this.isInEditMode=false
        this._matDialogRef.close()
      },
      error:err=>{
        this._snackBar.snackBar(err)
      }
     })
    }
  }


}
