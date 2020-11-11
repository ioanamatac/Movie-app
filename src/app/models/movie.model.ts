export  class Movie {
  photo: string;
  synopsis: string;

  constructor(public title: string,
              public director: string,
              public writer: string,
              public stars: string) {}
}
