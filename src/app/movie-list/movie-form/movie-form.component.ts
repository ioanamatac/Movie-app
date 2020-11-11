import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {MoviesService} from '../../services/movies.service';
import {Router} from '@angular/router';
import {Movie} from '../../models/movie.model';


@Component({
  selector: 'app-movie-form',
  templateUrl: './movie-form.component.html',
  styleUrls: ['./movie-form.component.scss']
})
export class MovieFormComponent implements OnInit {
  movieForm: FormGroup;
  fileIsUploading = false;
  fileUrl: string;
  fileUploaded = false;
  constructor(private formBuilder: FormBuilder,
              private  moviesService: MoviesService,
              private  router: Router) { }

  ngOnInit(): void {
    this.initForm();
  }
  initForm(): void {
    this.movieForm = this.formBuilder.group({
      title: ['', Validators.required],
      director: ['', Validators.required],
      writer: ['', Validators.required],
      stars: '',
      synopsis: ''
    });
  }
  onSaveMovie(): void {
    const title = this.movieForm.get('title').value;
    const director = this.movieForm.get('director').value;
    const writer = this.movieForm.get('writer').value;
    const stars = this.movieForm.get('stars').value;
    const synopsis = this.movieForm.get('synopsis').value;
    const newMovie = new Movie(title, director, writer, stars);
    newMovie.synopsis = synopsis;
    if (this.fileUrl && this.fileUrl !== '') {
      newMovie.photo = this.fileUrl;
    }
    this.moviesService.createNewMovie(newMovie);
    this.router.navigate(['/movies']);
  }
  onUploadFile(file: File): void {
    this.fileIsUploading = true;
    this.moviesService.uploadFile(file).then(
      (url: string) => {
      this.fileUrl = url;
      this.fileIsUploading = false;
      this.fileUploaded = true;
     }
    );
  }
  detectFiles(event): void {
    this.onUploadFile(event.target.files[0]);
  }

}
