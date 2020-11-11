import { Component, OnInit } from '@angular/core';
import {Movie} from '../../models/movie.model';
import {ActivatedRoute, Router} from '@angular/router';
import {MoviesService} from '../../services/movies.service';

@Component({
  selector: 'app-single-movie',
  templateUrl: './single-movie.component.html',
  styleUrls: ['./single-movie.component.scss']
})
export class SingleMovieComponent implements OnInit {
  movie: Movie;
  constructor(private  route: ActivatedRoute,
              private moviesService: MoviesService,
              private  router: Router) { }

  ngOnInit(): void {
    this.movie = new Movie('', '', '', ''); /*creer un objet movie vide*/
    const id = this.route.snapshot.params['id'];
    this.moviesService.getSingleMovie(+id).then(
      (movie: Movie) => {
        this.movie = movie;
       }
     );
  }
  onBack(): void {
    this.router.navigate(['/movies']);
  }

}
