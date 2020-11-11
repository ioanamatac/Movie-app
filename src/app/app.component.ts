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
      apiKey: "AIzaSyDeNenHjMwZMRwH28ZRJ7X03gIh47IGEzg",
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
