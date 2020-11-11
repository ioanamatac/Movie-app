import { Component, OnInit, OnDestroy } from '@angular/core';
import {Movie} from '../models/movie.model';
import {Subscription} from 'rxjs/Subscription';
import {MoviesService} from '../services/movies.service';
import {Router} from '@angular/router';


@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})
export class MovieListComponent implements OnInit , OnDestroy {
  movies: Movie[];
  moviesSubscription: Subscription;

  constructor(private moviesService: MoviesService,
              private  router: Router) { }

  ngOnInit(): void {
    this.moviesSubscription = this.moviesService.moviesSubject.subscribe(
      (movies: Movie[]) => {
      this.movies = movies;
      }
    );
    this.moviesService.getMovies();
    this.moviesService.emitMovies();
  }
  onNewMovie(): void {
    this.router.navigate(['/movies', 'new']);
  }

  onDeleteMovie(movie: Movie): void {
    this.moviesService.removeMovie(movie);
  }
  onViewMovie(id: number): void {
    this.router.navigate(['/movies', 'view', id]);
  }
  ngOnDestroy(): void {
    this.moviesSubscription.unsubscribe();
  }

}
