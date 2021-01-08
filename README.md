# Projet Movie-app

---

   <a name="general-info"></a>
   <a name="technologies"></a>
   <a name="installation"></a>
   <a name="side information"></a>

   ###General info 
![Image text](src/environments/1604849392225gwh.jpg)

Projet réalisé suite au cours "Développez des applications Web avec Angular" suivi chez OpenClassrooms (https://openclassrooms.com)
J'ai changé un peu le sujet :)
Certainement chaque cours suivi sur leur site m'a apporté toujours un plus de connaissances.
***

* Quelque mots sur l'application:
   * nécessite l'authentification.
   * les films peuvent être consultés sous forme d'une liste complète, puis individuellement.
  * les films peuvent être ajoutés ou supprimés.
  * il y a un modèle pour les films comportant simplement le titre, le réalisateur, le scénario, les acteurs (la photo et le résumé du film qui seront facultatives).
  * backend: les données du formulaire (inclus la photo) se chargent très bien dans la database de Firebase.
  * il y a un guard pour toutes les routes, sauf l'authentification empêchant les utilisateurs non authentifié d'y acceder. 
###Technologies
* Système d'exploitation: Linux Mint
* NodeJs v14.15.4
* Angular 10
* Firebase 8
### Installation
* git clone url 
* cd../path/to/the/file
* npm install
* npm start
* http://localhost:4200/movies
###Side information
#### Creation de composants: 
* _ng g c auth/signup_

* _ng g c auth/signin_

* _ng g c movie-list_

* _ng g c movie-list/single-movie_
  
* _ng g c movie-list/movie-form_

* _ng g c header_
* _ng g s services/auth_
* _ng g s services/movies_
* _ng g s services/auth-guard_
####app.module.ts
```Angular
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { SingleMovieComponent } from './movie-list/single-movie/single-movie.component';
import { MovieFormComponent } from './movie-list/movie-form/movie-form.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import { AuthService} from './services/auth.service';
import { MoviesService} from './services/movies.service';
import { AuthGuardService} from './services/auth-guard.service';
import { HttpClientModule} from '@angular/common/http';

const appRoutes: Routes = [
{ path: 'auth/signup', component: SignupComponent },
{ path: 'auth/signin', component: SigninComponent },
{ path: 'movies', canActivate: [AuthGuardService], component: MovieListComponent },
{ path: 'movies/new', canActivate: [AuthGuardService], component: MovieFormComponent },
{ path: 'movies/view/:id', canActivate: [AuthGuardService], component: SingleMovieComponent },
{ path: '', redirectTo: 'movies', pathMatch: 'full' },
{ path: '**', redirectTo: 'movies' }
];

@NgModule({
declarations: [
AppComponent,
SignupComponent,
SigninComponent,
MovieListComponent,
SingleMovieComponent,
MovieFormComponent,
HeaderComponent
],
imports: [
BrowserModule,
FormsModule,
ReactiveFormsModule,
HttpClientModule,
RouterModule.forRoot(appRoutes)
],
providers: [
AuthService,
MoviesService,
AuthGuardService
],
bootstrap: [AppComponent]
})
export class AppModule { }
````
####app.component.ts
````Angular
    import { Component } from '@angular/core';
    import firebase from 'firebase';


    @Component({
      selector: 'app-root',
      templateUrl: './app.component.html',
      styleUrls: ['./app.component.scss']
    })
    export class AppComponent {
      title = 'movie-application';

    constructor(){
      // Your web app's Firebase configuration
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      const firebaseConfig = {
        apiKey: "A:ZMRwH28ZRJ7X03gIh47IGEzg",
        authDomain: "movie-application-84fe3.firebaseapp.com",
        databaseURL: "https://movie-application-84fe3.firebaseio.com",
        projectId: "movie-application-84fe3",
        storageBucket: "movie-application-84fe3.appspot.com",
        messagingSenderId: "1016334435003",
        appId: "1:1016334435003:web:4207b660ec2f58d2b3df9e",
        measurementId: "G-HV78RKFFT6"
      };
      // Initialize Firebase
      firebase.initializeApp(firebaseConfig);
      firebase.analytics();
    }

    }
````
 ####Enjoy! :)
_Ioana_ _Matac_ -
  _Concepteur Développeur Junior_











