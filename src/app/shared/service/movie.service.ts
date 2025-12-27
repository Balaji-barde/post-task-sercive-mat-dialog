import { Injectable } from '@angular/core';
import { IapiRes, Imovies } from '../models/movies';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor() { }



   moviesArr: Imovies[] = [
    {
      id: 'M01',
      title: 'Inception',
      genre: 'Action',
      rating: 8.8,
      releaseYear: 2010,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg'
    },
    {
      id: 'M02',
      title: 'Interstellar',
      genre: 'Drama',
      rating: 8.6,
      releaseYear: 2014,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg'
    },
    {
      id: 'M03',
      title: 'The Dark Knight',
      genre: 'Action',
      rating: 9.0,
      releaseYear: 2008,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg'
    },
    {
      id: 'M04',
      title: 'Avengers: Endgame',
      genre: 'Action',
      rating: 8.4,
      releaseYear: 2019,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg'
    },
    {
      id: 'M05',
      title: 'Joker',
      genre: 'Drama',
      rating: 8.4,
      releaseYear: 2019,
      isActive: false,
      image: 'https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg'
    },
    {
      id: 'M06',
      title: 'Parasite',
      genre: 'Thriller',
      rating: 8.6,
      releaseYear: 2019,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/7IiTTgloJzvGI1TAYymCfbfl3vT.jpg'
    },
    {
      id: 'M07',
      title: 'Gladiator',
      genre: 'Action',
      rating: 8.5,
      releaseYear: 2000,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/ty8TGRuvJLPUmAR1H1nRIsgwvim.jpg'
    },
    {
      id: 'M08',
      title: 'Titanic',
      genre: 'Drama',
      rating: 7.9,
      releaseYear: 1997,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg'
    },
    {
      id: 'M09',
      title: 'The Matrix',
      genre: 'Sci-Fi',
      rating: 8.7,
      releaseYear: 1999,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg'
    },
    {
      id: 'M10',
      title: 'Forrest Gump',
      genre: 'Drama',
      rating: 8.8,
      releaseYear: 1994,
      isActive: true,
      image: 'https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg'
    }
  ];

  fetchAllData(): Observable<IapiRes<Imovies[]>> {
    return of({
      status: true,
      msg: 'Data Fetched Successfully!!!!',
      data: this.moviesArr
    })
  }

  addMovies(movie: Imovies) {
    this.moviesArr.unshift(movie);
    return of(movie)
  }


  movieRemove(movie: Imovies) {
    let getIndex = this.moviesArr.findIndex(t => t.id == movie.id)
    this.moviesArr.splice(getIndex, 1)
    return of(movie)
  }


  movieUpdate(movie: Imovies) {

    let getIndex = this.moviesArr.findIndex(t => t.id == movie.id)
    this.moviesArr[getIndex] = movie
    return of(movie)
  }
}



