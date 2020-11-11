  import { Injectable } from '@angular/core';
  import {Movie} from '../models/movie.model';
  import {Subject} from 'rxjs';
  import firebase from 'firebase';
  import Datasnapshot = firebase.database.DataSnapshot;


  @Injectable({
    providedIn: 'root'
  })
  export class MoviesService {
    movies: Movie[];
    moviesSubject = new Subject<Movie[]>();
    constructor() {
      this.getMovies();
    }
    emitMovies(): void {
      this.moviesSubject.next(this.movies);
    }

    saveMovies(): void {
      firebase.database().ref('/movies').set(this.movies);
    }

    getMovies(): void {
      firebase.database().ref('/movies')
        .on('value', (data: Datasnapshot) => {
            this.movies = data.val() ? data.val() : [];
            this.emitMovies();
          }
        );
    }

    getSingleMovie(id: number): Promise<any> {
      return new Promise(
        (resolve, reject) => {
          firebase.database().ref('/movies/' + id).once('value').then(
            (data: Datasnapshot) => {
              resolve(data.val());
            }, (error) => {
              reject(error);
            }
          );
        }
      );
    }
    createNewMovie(newMovie: Movie): void {
      this.movies.push(newMovie);
      this.saveMovies();
      this.emitMovies();
  }
   removeMovie(movie: Movie): void {
    if (movie.photo) {
      const storageRef = firebase.storage().refFromURL(movie.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo removed!');
        },
        (error) => {
            console.log('Could not remove photo! : ' + error);
        }
      );
    }
    const movieIndexToRemove = this.movies.findIndex(
        (movieEl) => {
          if (movieEl === movie){
            return true;
          }
         }
       );
    this.movies.splice(movieIndexToRemove, 1);
    this.saveMovies();
    this.emitMovies();
     }
    uploadFile(file: File): Promise<any> {
      return new Promise(
        (resolve, reject) => {
          const almostUniqueFileName = Date.now().toString();
          const upload = firebase.storage().ref()
            .child('images/' + almostUniqueFileName + file.name).put(file);
          upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
            () => {
              console.log('Chargement…');
            },
            (error) => {
              console.log('Erreur de chargement ! : ' + error);
              reject();
            },
            () => {
              resolve(upload.snapshot.ref.getDownloadURL());
            }
          );
        }
      );
    }


  }
